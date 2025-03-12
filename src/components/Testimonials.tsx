
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Communion App helped me find events where I could connect with others who share my faith while respecting our differences.",
      name: "Sarah Johnson",
      role: "Community Member",
      avatar: ""
    },
    {
      quote: "I've organized several interfaith dialogues through this platform. The diverse attendance has been incredible!",
      name: "Michael Chen",
      role: "Event Organizer",
      avatar: ""
    },
    {
      quote: "As someone new to the area, this app made it easy to find welcoming communities and make new friends.",
      name: "Priya Patel",
      role: "New Resident",
      avatar: ""
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from the people who have found connection and community through Communion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <blockquote className="mb-4 text-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
