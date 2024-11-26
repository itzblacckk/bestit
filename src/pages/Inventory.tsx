import React, { useState } from 'react';
import { Laptop, Monitor, Package } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  condition: string;
  description: string;
  image: string;
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Dell Latitude 5420",
    category: "Laptop",
    price: 599,
    condition: "Refurbished",
    description: "Intel i5, 8GB RAM, 256GB SSD",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=400"
  },
  {
    id: 2,
    name: "HP EliteDesk 800 G4",
    category: "Desktop",
    price: 499,
    condition: "Refurbished",
    description: "Intel i7, 16GB RAM, 512GB SSD",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400"
  }
];

export default function Inventory() {
  const [products] = useState<Product[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Buy & Sell</h1>
        
        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'all' 
                ? 'bg-sky-500 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory('laptop')}
            className={`px-4 py-2 rounded-lg flex items-center ${
              selectedCategory === 'laptop' 
                ? 'bg-sky-500 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
          >
            <Laptop className="w-4 h-4 mr-2" /> Laptops
          </button>
          <button
            onClick={() => setSelectedCategory('desktop')}
            className={`px-4 py-2 rounded-lg flex items-center ${
              selectedCategory === 'desktop' 
                ? 'bg-sky-500 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
          >
            <Monitor className="w-4 h-4 mr-2" /> Desktops
          </button>
          <button
            onClick={() => setSelectedCategory('accessories')}
            className={`px-4 py-2 rounded-lg flex items-center ${
              selectedCategory === 'accessories' 
                ? 'bg-sky-500 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
          >
            <Package className="w-4 h-4 mr-2" /> Accessories
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sky-500 font-bold">${product.price}</span>
                  <span className="px-2 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-full text-sm">
                    {product.condition}
                  </span>
                </div>
                <button className="mt-4 w-full bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors">
                  Contact for Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sell Your Device Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Sell Your Device</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Get the best price for your used laptops and computers. We offer fair evaluations and instant payments.
          </p>
          <form className="max-w-xl mx-auto space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Device Type</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700">
                <option>Laptop</option>
                <option>Desktop</option>
                <option>Accessories</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Model Name</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
              <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"></textarea>
            </div>
            <button type="submit" className="w-full bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors">
              Get Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}