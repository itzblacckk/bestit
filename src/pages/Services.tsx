import React from 'react';
import { Wrench, Laptop, Monitor, Cpu, HardDrive, Wifi, Shield, HeadphonesIcon } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    icon: Wrench,
    title: 'Laptop Repairs',
    description: 'Professional repair services for all laptop brands with quick turnaround time'
  },
  {
    icon: Laptop,
    title: 'Refurbished Laptops',
    description: 'Quality tested refurbished laptops with warranty'
  },
  {
    icon: Monitor,
    title: 'Desktop Services',
    description: 'Complete desktop solutions and repairs'
  },
  {
    icon: Cpu,
    title: 'Hardware Upgrades',
    description: 'RAM, SSD, and other hardware upgrade services'
  },
  {
    icon: HardDrive,
    title: 'Data Recovery',
    description: 'Professional data recovery from damaged drives'
  },
  {
    icon: Wifi,
    title: 'Network Solutions',
    description: 'Network setup and troubleshooting services'
  },
  {
    icon: Shield,
    title: 'Security Solutions',
    description: 'Antivirus installation and security consulting'
  },
  {
    icon: HeadphonesIcon,
    title: 'Tech Support',
    description: '24/7 technical support for all IT related issues'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Our Services</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          We offer a comprehensive range of IT services to meet all your technology needs. From repairs to upgrades, we've got you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}