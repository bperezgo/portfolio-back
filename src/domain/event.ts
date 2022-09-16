export interface DomainEvent {
  data: {
    aggregateId: string;
    id: string;
    attributes: any;
    meta: any;
  };
}
