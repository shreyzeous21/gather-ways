
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
