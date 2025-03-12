
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-12 bg-muted mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-communion-purple flex items-center justify-center">
              <span className="text-white font-bold text-sm">CA</span>
            </div>
            <span className="text-lg font-bold">Communion</span>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link to="/events" className="text-sm text-muted-foreground hover:text-foreground">
              Events
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Communion App. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
