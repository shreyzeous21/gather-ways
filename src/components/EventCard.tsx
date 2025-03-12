
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, MapPinIcon } from 'lucide-react';
import { Event } from '@/types/event';
import { format } from 'date-fns';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card className="card-hover h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold line-clamp-2">{event.title}</h3>
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {event.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center text-sm text-muted-foreground mb-1">
          <CalendarIcon className="h-4 w-4 mr-2" />
          <span>{format(event.date, 'PPP p')}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <MapPinIcon className="h-4 w-4 mr-2" />
          <span>{event.location}</span>
        </div>
        <p className="text-sm line-clamp-3">{event.description}</p>
      </CardContent>
      <CardFooter>
        <div className="w-full">
          <button className="text-primary hover:text-primary/80 text-sm font-medium w-full text-left">
            View Details
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
