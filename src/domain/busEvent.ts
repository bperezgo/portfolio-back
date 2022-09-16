import { DomainEvent } from './event';

export interface BusEvent {
  publish(evt: DomainEvent): void;
}
