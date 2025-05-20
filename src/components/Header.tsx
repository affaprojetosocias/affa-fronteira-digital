
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Quem somos', href: '#quem-somos' },
    { name: 'Nossas Ações', href: '#nossas-acoes' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Como Contribuir', href: '#como-contribuir' }
  ];

  return (
    <header 
      className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300 px-4 md:px-8 py-4',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className="h-12 w-auto mr-2">
            <img 
              src="/lovable-uploads/c3280ea8-388a-46e8-b329-30945abeff7b.png" 
              alt="AFFA Logo" 
              className="h-12 w-auto"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-gray-800 hover:text-black transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-3 text-gray-800 hover:bg-gray-100 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
