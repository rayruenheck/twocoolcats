import React from 'react'

export default function About() {
  return (
    <div id='about' className="container mx-auto p-6">
      <div className="bg-white p-6 w-full">
        <div className="relative flex items-center justify-center mb-6 w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 border-t border-gray-300"></div>
          </div>
          <div className="relative bg-white px-4 text-lg font-semibold">About Us</div>
        </div>
      <div className='w-full h-auto flex justify-center align-middle'>

      <h3 className='text-center w-2/3'>Since 2010 Two Cool Cats has been offering awesome website development for the budget minded marketer. This family based operation is available to speak with you about your company, your goals and ultimately about your website.   Comprised of a marketer and a software engineer this team is able to help you make your ideas feasible and affordable.  If your site needs updating or you want a brand new site we have the capabilities to help you out!</h3>
      </div>
      </div>
    </div>
  )
}
