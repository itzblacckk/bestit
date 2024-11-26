import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Wrench, ShoppingBag, Phone, Clock, MapPin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-sky-100 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg">
                <Laptop className="h-16 w-16 text-sky-500" />
              </div>
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Best IT Shop in</span>
              <span className="block text-sky-500">Dombivli</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your one-stop solution for all computer needs. Quality refurbished laptops, expert repairs, and professional IT services.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link to="/inventory" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 md:py-4 md:text-lg md:px-10">
                  Browse Products
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link to="/services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                <Laptop className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Refurbished Laptops</h3>
              <p className="mt-2 text-center text-gray-500 dark:text-gray-300">Quality tested and certified refurbished laptops at great prices.</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Expert Repairs</h3>
              <p className="mt-2 text-center text-gray-500 dark:text-gray-300">Professional repair services for all brands of laptops and computers.</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Accessories</h3>
              <p className="mt-2 text-center text-gray-500 dark:text-gray-300">Wide range of genuine computer accessories and parts.</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">24/7 Support</h3>
              <p className="mt-2 text-center text-gray-500 dark:text-gray-300">Round-the-clock technical support for all your IT needs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  With over a decade of experience in the IT industry, we've built a reputation for excellence in computer sales and services.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="h-6 w-6 text-sky-500 mr-2">✓</span>
                    Expert technicians with years of experience
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="h-6 w-6 text-sky-500 mr-2">✓</span>
                    Genuine parts and accessories
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="h-6 w-6 text-sky-500 mr-2">✓</span>
                    Competitive pricing and quick service
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="h-6 w-6 text-sky-500 mr-2">✓</span>
                    90-day warranty on all repairs
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80" 
                alt="IT Professional at work" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Visit Our Store</h2>
            <div className="mt-6 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-sky-500 mr-2" />
                <span className="text-gray-600 dark:text-gray-300">Tai Pingle Chowk, Dombivli East</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-sky-500 mr-2" />
                <span className="text-gray-600 dark:text-gray-300">10:00 AM - 8:00 PM</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-sky-500 mr-2" />
                <span className="text-gray-600 dark:text-gray-300">contact@bestitshop.com</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
         <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d895.2746778902762!2d73.09133496956366!3d19.2165023988761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7950f3fe379a1%3A0x7ea97175df5b0932!2sBest%20IT%20Shop!5e1!3m2!1sen!2sin!4v1732598768974!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Best IT Shop Location"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://maps.app.goo.gl/LEHwQTbChnce6ZyG7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sky-500 hover:text-sky-600"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}