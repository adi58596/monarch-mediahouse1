
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-xl font-bold">
            Monarch Media
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#results" className="hover:text-primary transition-colors">Results</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
            <Button asChild>
              <a href="#contact">Get in Touch</a>
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
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
