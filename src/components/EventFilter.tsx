
import React from 'react';
import { Button } from '@/components/ui/button';
import { EventCategory } from '@/types/event';
import { Check } from 'lucide-react';

interface EventFilterProps {
  categories: EventCategory[];
  selectedCategory: EventCategory | null;
  onChange: (category: EventCategory | null) => void;
}

const EventFilter = ({ categories, selectedCategory, onChange }: EventFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        size="sm"
        onClick={() => onChange(null)}
        className="rounded-full"
      >
        {selectedCategory === null && <Check className="h-4 w-4 mr-1" />}
        All
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(category)}
          className="rounded-full"
        >
          {selectedCategory === category && <Check className="h-4 w-4 mr-1" />}
          {category}
        </Button>
      ))}
    </div>
  );
};

export default EventFilter;
