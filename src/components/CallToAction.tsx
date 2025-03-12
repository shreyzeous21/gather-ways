
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-communion-purple text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          Discover events, connect with others, and be part of a movement building bridges across different faiths and interests.
        </p>
        <Button asChild size="lg" variant="secondary" className="bg-white text-communion-purple hover:bg-accent hover:text-communion-deep-purple">
          <Link to="/events">Explore Events Now</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
