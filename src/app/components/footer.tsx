import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-black text-white p-4 text-center">
          <p className="mb-2">© {new Date().getFullYear()} Two Cool Cats. All rights reserved.</p>
          <a href="mailto:anita.e.childers@gmail.com?subject=Appreciation for the Artwork" className="text-blue-300 hover:text-blue-500">
            Like this artwork? Contact Anita!
          </a>
        </footer>
      )
}
