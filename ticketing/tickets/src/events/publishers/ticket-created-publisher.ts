import { Publisher, Subjects, TicketCreatedEvent} from '@lazzaris/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}