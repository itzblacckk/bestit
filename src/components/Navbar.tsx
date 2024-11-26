import { Menu, X, Laptop } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sky-500 dark:bg-sky-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Laptop className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Best IT Shop</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:bg-sky-600 dark:hover:bg-sky-800 px-3 py-2 rounded-md">Home</Link>
            <Link to="/services" className="hover:bg-sky-600 dark:hover:bg-sky-800 px-3 py-2 rounded-md">Services</Link>
            <Link to="/inventory" className="hover:bg-sky-600 dark:hover:bg-sky-800 px-3 py-2 rounded-md">Buy & Sell</Link>
            <Link to="/contact" className="hover:bg-sky-600 dark:hover:bg-sky-800 px-3 py-2 rounded-md">Contact</Link>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-sky-600 dark:hover:bg-sky-800 px-3 py-2 rounded-md">Home</Link>
            <Link to="/services" className="block hover:bg-sky-600 dark:hover:bg-sky-800 px-3 py-2 rounded-md">Services</Link>
            <Link to="/inventory" className="block hover:bg-sky-600 dark:hover:bg-sky-800 px-3 py-2 rounded-md">Buy & Sell</Link>
            <Link to="/contact" className="block hover:bg-sky-600 dark:hover:bg-sky-800 px-3 py-2 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}