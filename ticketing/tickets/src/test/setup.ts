import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import jwt from 'jsonwebtoken'
import { app } from '../app';

let mongo: any;

declare global {
  var signin: () => string[];
}

jest.setTimeout(10 * 1000);

beforeAll(async () => {
  process.env.JWT_KEY = 'dummy_secret'

  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
})

global.signin = () => {
  const payload = {
    id: '1lk24j124l',
    email: 'test@test.com'
  }

  const token = jwt.sign(payload, process.env.JWT_KEY!);

  const session = { jwt: token};

  const sessionJSON = JSON.stringify(session);

  const base64 = Buffer.from(sessionJSON).toString('base64');

  return [`session=${base64}`];
}