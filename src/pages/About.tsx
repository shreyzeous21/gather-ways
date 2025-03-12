
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">About Communion</h1>
        
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                Communion is dedicated to fostering connections between people of different faiths, 
                backgrounds, and interests. We believe that by bringing diverse communities together, 
                we can build a more understanding, compassionate, and inclusive society.
              </p>
              <p className="text-muted-foreground">
                Our platform provides a space for individuals and organizations to share events, 
                promote dialogue, and create opportunities for meaningful engagement across cultural 
                and religious boundaries.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2024, Communion began as a small initiative to help connect local 
                religious institutions interested in interfaith dialogue. As we saw the positive impact 
                of these connections, we expanded our vision to include a broader range of community 
                events and interests.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to serve communities across the country, helping people find 
                meaningful connections and experiences that enrich their lives and broaden their 
                perspectives.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-medium">Inclusivity</h3>
                  <p className="text-muted-foreground">Welcoming everyone regardless of faith, background, or identity.</p>
                </li>
                <li>
                  <h3 className="font-medium">Understanding</h3>
                  <p className="text-muted-foreground">Promoting knowledge and appreciation of diverse perspectives.</p>
                </li>
                <li>
                  <h3 className="font-medium">Community</h3>
                  <p className="text-muted-foreground">Building meaningful connections that enrich people's lives.</p>
                </li>
                <li>
                  <h3 className="font-medium">Respect</h3>
                  <p className="text-muted-foreground">Honoring different traditions, beliefs, and practices.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
