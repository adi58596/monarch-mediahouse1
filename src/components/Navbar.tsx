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
            <img
              src="/Monarch%20Logo.png"
              alt="Monarch Media House Logo"
              className="h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#brands" className="hover:text-primary transition-colors">
              Brands
            </a>
            <a href="#services" className="hover:text-primary transition-colors">
              Services
            </a>
            <a href="#results" className="hover:text-primary transition-colors">
              Results
            </a>
            <a
              href="https://www.canva.com/design/DAGZcDmFDx4/YQTosCcjphK7ysx-hsni5A/view?utm_content=DAGZcDmFDx4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5cd428a90e"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Portfolio
            </a>
            <Button
              asChild
              className="bg-[#FF7A1A] text-white hover:bg-[#377453] transition-colors duration-300"
            >
              <a
                href="https://calendly.com/adii_/let-s-catch-up"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a href="#brands" className="hover:text-primary transition-colors">Brands</a>
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#results" className="hover:text-primary transition-colors">
                Results
              </a>
              <a
                href="https://www.canva.com/design/DAGZcDmFDx4/YQTosCcjphK7ysx-hsni5A/view?utm_content=DAGZcDmFDx4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5cd428a90e"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Portfolio
              </a>
              <Button asChild className="w-full">
                <a
                  href="https://calendly.com/adii_/let-s-catch-up"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
