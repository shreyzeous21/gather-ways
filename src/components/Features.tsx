
import React from 'react';
import { CalendarDays, Heart, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <CalendarDays className="h-10 w-10 text-primary" />,
      title: 'Discover Events',
      description: 'Find local events that match your interests and faith background.'
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Build Community',
      description: 'Connect with like-minded individuals and foster meaningful relationships.'
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: 'Share Experiences',
      description: 'Participate in activities that promote understanding and togetherness.'
    }
  ];

  return (
    <section id="about" className="py-16 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Communion</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform brings people together across different backgrounds and beliefs, 
            creating spaces for connection and understanding.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg border bg-card card-hover"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
