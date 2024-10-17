import React from 'react'
import Link from 'next/link'
function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0
    '>
      <div className='p-4 relative z-10 w-full text-center'>
        <div
        className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent
        bg-gradient-to-b from-neutral-50 to-neutral-400'>
        Savor Every Bite at Sweet Home
        </div>
        <div className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-2xl mx-auto'>
        Welcome to Sweet Home, where every dish is crafted with the freshest ingredients and a touch of creativity. Join us for a delightful dining experience that combines tradition with modern flair, making each visit truly special!
        </div>
        <div className='mt-4'>
         <Link href="/"> start Now </Link>
        </div>

      </div>
        
        </div>
  )
}

export default HeroSection