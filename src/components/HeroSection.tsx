// import React from 'react'
// import Link from 'next/link'
// import { Spotlight } from "@/components/ui/Spotlight";
// function HeroSection() {
//   return (
//     <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0
//     '>
//          <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />
//       <div className='p-4 relative z-10 w-full text-center'>
//         <div
//         className=' md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent
//         bg-gradient-to-b from-neutral-50 to-neutral-400  h-auto'>
//         Savor Every Bite at Sweet Home
//         </div>
//         <div className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-2xl mx-auto'>
//         Welcome to Sweet Home, where every dish is crafted with the freshest ingredients and a touch of creativity. Join us for a delightful dining experience that combines tradition with modern flair, making each visit truly special!
//         </div>
//         <div className='mt-4'>
//          <Link href="/"> start Now </Link>
//         </div>

//       </div>

//         </div>
//   )
// }

// export default HeroSection
import React from "react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";

function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-auto md:h-[40rem] py-10 md:py-0 mx-auto overflow-hidden rounded-md">
      {/* Spotlight Element with Better Positioning */}
      <Spotlight
        className="absolute -top-32 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* Text Content */}
      <div className="relative z-10 w-full px-6 text-center">
        <h1 className="mt-24 text-3xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Savor Every Bite at Sweet Home’s
        </h1>

        <p className="mt-4 text-sm md:text-lg text-neutral-300 max-w-2xl mx-auto">
          Welcome to Sweet Home’s, where every dish is crafted with the freshest
          ingredients and a touch of creativity. Join us for a delightful dining
          experience that combines tradition with modern flair, making each
          visit truly special!
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-6">
          <Link href="/">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 text-lg"
            >
              Order Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
