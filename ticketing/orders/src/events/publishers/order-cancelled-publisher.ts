import { Publisher, OrderCancelledEvent, Subjects } from '@lazzaris/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
