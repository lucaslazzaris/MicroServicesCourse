import { PaymentCreatedEvent, Publisher, Subjects } from "@lazzaris/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated
}