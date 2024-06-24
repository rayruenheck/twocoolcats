import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <div className="relative w-full h-[100vh]">
          <Image
            src="/kitty.jpg"
            alt="Kitty"
            className="absolute inset-0 w-full h-full object-cover"
            fill
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
            <h1 className="text-white text-4xl font-bold">Two Cool Cats</h1>
            <h3 className='text-white text-1xl font-bold'>website development</h3>
          </div>
        </div>
      )
}
