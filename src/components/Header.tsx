
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="w-full py-4 px-6 md:px-12 flex items-center justify-between border-b">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-communion-purple flex items-center justify-center">
          <span className="text-white font-bold">CA</span>
        </div>
        <Link to="/" className="text-xl font-bold">
          Communion
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`link-hover text-base font-medium ${
              isActive(item.path) ? 'text-primary font-semibold' : 'text-foreground'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col gap-6 mt-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium ${
                  isActive(item.path) ? 'text-primary font-semibold' : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
