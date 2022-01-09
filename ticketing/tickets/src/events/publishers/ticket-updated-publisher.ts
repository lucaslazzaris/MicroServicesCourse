import { Publisher, Subjects, TicketUpdatedEvent} from '@lazzaris/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}