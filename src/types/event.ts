
export type EventCategory = 'Religious' | 'Social' | 'Charity' | 'Educational' | 'Cultural';

export interface Event {
  id: string;
  title: string;
  date: Date;
  location: string;
  description: string;
  category: EventCategory;
}
