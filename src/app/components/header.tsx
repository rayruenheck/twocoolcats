import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Header() {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Adjust the screen width as needed
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
    return (
        <div className="relative w-full h-[100vh]">
          {isSmallScreen ? (
        <Image
          src="/kitty-sm.jpg"
          alt="Kitty"
          className="absolute inset-0 w-full h-full object-cover"
          fill
        />
      ) : (
        <Image
          src="/kitty.jpg"
          alt="Kitty"
          className="absolute inset-0 w-full h-full object-cover"
          fill
        />
      )}
          <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
            <h1 className="text-white text-4xl font-bold">Two Cool Cats</h1>
            <h3 className='text-white text-1xl font-bold'>website development</h3>
          </div>
        </div>
      )
}
