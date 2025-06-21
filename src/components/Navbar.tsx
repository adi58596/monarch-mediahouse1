
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
              <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z" fill="currentColor" />
              <path d="M16 8c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" fill="currentColor" />
            </svg>
            <span className="text-xl font-bold">Monarch Media House</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-primary transition-colors">
              Services
            </a>
            <a href="#results" className="hover:text-primary transition-colors">
              Results
            </a>
            <a href="#portfolio" className="hover:text-primary transition-colors">
              Portfolio
            </a>
            <Button asChild>
              <a href="https://calendly.com/your-booking-link" target="_blank" rel="noopener noreferrer">
                Book a call
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white py-4 px-4 shadow-lg">
            <div className="flex flex-col gap-4">
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#results" className="hover:text-primary transition-colors">Results</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
              <Button asChild className="w-full">
                <a href="https://calendly.com/your-booking-link" target="_blank" rel="noopener noreferrer">
                  Book a call
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
