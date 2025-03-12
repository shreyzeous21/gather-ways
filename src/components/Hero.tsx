
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-accent to-background overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl">
            Connecting People Across{' '}
            <span className="text-primary">Faiths & Interests</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Find events that matter to you, connect with like-minded individuals, 
            and build meaningful relationships in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild size="lg" className="animate-scale-in">
              <Link to="/events">Explore Events</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-communion-purple/10 blur-3xl"></div>
    </section>
  );
};

export default Hero;
