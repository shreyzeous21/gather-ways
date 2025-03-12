
import { Event, EventCategory } from '@/types/event';

export const eventCategories: EventCategory[] = [
  'Religious',
  'Social',
  'Charity',
  'Educational',
  'Cultural'
];

export const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Interfaith Prayer Circle',
    date: new Date(2025, 2, 15, 18, 30),
    location: 'Community Center, Downtown',
    description: 'A gathering of people from different faith backgrounds to share in prayer and reflection.',
    category: 'Religious'
  },
  {
    id: '2',
    title: 'Community Potluck Dinner',
    date: new Date(2025, 2, 20, 19, 0),
    location: 'Riverside Park',
    description: 'Bring a dish to share and connect with neighbors from various backgrounds.',
    category: 'Social'
  },
  {
    id: '3',
    title: 'Food Drive for Local Shelter',
    date: new Date(2025, 2, 25, 10, 0),
    location: 'Main Street Food Bank',
    description: 'Help collect and organize food donations for those in need in our community.',
    category: 'Charity'
  },
  {
    id: '4',
    title: 'World Religions Seminar',
    date: new Date(2025, 3, 5, 14, 0),
    location: 'City Library, Conference Room B',
    description: 'An educational series exploring the beliefs and practices of major world religions.',
    category: 'Educational'
  },
  {
    id: '5',
    title: 'Cultural Festival',
    date: new Date(2025, 3, 12, 11, 0),
    location: 'Central Square',
    description: 'Celebrate the diversity of our community with food, music, and traditional performances.',
    category: 'Cultural'
  },
  {
    id: '6',
    title: 'Meditation Workshop',
    date: new Date(2025, 3, 18, 9, 0),
    location: 'Peaceful Gardens Retreat Center',
    description: 'Learn meditation techniques from different spiritual traditions.',
    category: 'Religious'
  }
];
