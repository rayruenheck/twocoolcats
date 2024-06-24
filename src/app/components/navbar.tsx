import React from 'react'

export default function NavBar() {
    const pages: string[] = ['Home', 'Services', 'About', 'Contact Us'];
  
    return (
        <nav className="bg-black text-white">
        <div className="flex justify-around py-4">
          {pages.map((page) => (
            <a
              key={page}
              href={page === 'Home' ? '/' : `/${page.toLowerCase().replace(/\s/g, '-')}`}
              className="hover:rotate-12"
            >
              {page}
            </a>
          ))}
        </div>
      </nav>
    )
}
