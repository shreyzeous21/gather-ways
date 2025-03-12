
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import EventCard from '@/components/EventCard';
import EventFilter from '@/components/EventFilter';
import AddEventForm from '@/components/AddEventForm';
import { Event, EventCategory } from '@/types/event';
import { eventCategories, sampleEvents } from '@/lib/data';

const STORAGE_KEY = 'communionAppEvents';

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | null>(null);

  // Load events from localStorage on initial render
  useEffect(() => {
    const storedEvents = localStorage.getItem(STORAGE_KEY);
    if (storedEvents) {
      try {
        // Parse dates back to Date objects
        const parsedEvents = JSON.parse(storedEvents, (key, value) => {
          if (key === 'date') {
            return new Date(value);
          }
          return value;
        });
        setEvents(parsedEvents);
      } catch (error) {
        console.error('Error parsing stored events:', error);
        setEvents(sampleEvents);
      }
    } else {
      // If no events in storage, use sample events
      setEvents(sampleEvents);
    }
  }, []);

  const filteredEvents = selectedCategory
    ? events.filter(event => event.category === selectedCategory)
    : events;

  const handleAddEvent = (newEvent: Event) => {
    const updatedEvents = [newEvent, ...events];
    setEvents(updatedEvents);
    
    // Save to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEvents));
    } catch (error) {
      console.error('Error saving events to localStorage:', error);
    }
  };

  return (
    <Layout>
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Community Events</h1>
            <p className="text-muted-foreground mb-6">
              Discover and join events happening in your community.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <EventFilter 
                categories={eventCategories}
                selectedCategory={selectedCategory}
                onChange={setSelectedCategory}
              />
              
              <AddEventForm onAddEvent={handleAddEvent} />
            </div>
          </div>
          
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No events found. Try a different category or add a new event.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map(event => (
                <div key={event.id} className="animate-fade-in">
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
