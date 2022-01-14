import { Publisher, ExpirationCompleteEvent, Subjects } from "@lazzaris/common"

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}