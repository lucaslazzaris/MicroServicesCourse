import Stripe from 'stripe';

// This will break. As this is only a course, I won't create the stripe account
export const stripe = new Stripe(process.env.STRIPE_KEY!, {
  apiVersion: '2020-08-27',
});
