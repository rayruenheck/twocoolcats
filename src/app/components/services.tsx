import React from 'react';

export default function Services() {
  const services = [
    { title: 'Service 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Service 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Service 3', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.' },
    { title: 'Service 4', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { title: 'Service 5', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { title: 'Service 6', description: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.' },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 w-full">
        <div className="relative flex items-center justify-center mb-6 w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 border-t border-gray-300"></div>
          </div>
          <div className="relative bg-white px-4 text-lg font-semibold">Services</div>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 h-[400px] rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-sm hover:scale-95"
            >
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
}