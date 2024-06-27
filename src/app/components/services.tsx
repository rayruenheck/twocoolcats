import Image from 'next/image';
import React from 'react';

export default function Services() {
  const services = [
    { title: 'Websites', description: 'Custom websites are created with the customer\'s involvement. You give us your ideas and we will put them on the web! Working in JavaScript we are able to develop one of a kind websites. Want more of a CMS site? we can do that too!', img: '/website-icon.png' },
    { title: 'Fixes', description: 'Have issues with your current site and don\'t want to abandon it completely? We\'ll do those fixes in a timely manner. We\'ve worked with Joomla!, HTML, Wix, Squarespace, and Weebly to name a few. Tell us what needs to be done. We\'re here to help!', img: '/fixes.png' },
    { title: 'Databases', description: 'We can create all types of databases that are necessary for you to manage your business efficiently. From online stores to mailing lists we\'ll make sure it\'s painless.', img: '/database.png' },
  ];

  return (
    <div id='services' className="container mx-auto p-6">
      <div className="bg-white p-6 w-full">
        <div className="relative flex items-center justify-center mb-6 w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 border-t border-gray-300"></div>
          </div>
          <div className="relative bg-white px-4 text-lg font-semibold">Services</div>
        </div>
  
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-sm hover:scale-95"
            >
              <Image src={service.img} alt={`${service.title} icon`} width={96} height={96} className="block mx-auto h-[96px] w-[96px] mb-10 mt-8" />
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
  
}