import { Publisher, OrderCreatedEvent, Subjects } from '@lazzaris/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
