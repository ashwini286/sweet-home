// import React from 'react'

// const ClientReview = () => {
//   return (
//     <div>ClientReview</div>
//   )
// }

// export default ClientReview

"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function ClientReview() {
  return (
   
    <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10 text-white">Why Customers Choose Sweet Home</h2>
        <div className="flex justify-center w-full overflow-hidden md:px-4 px-6 lg:px-8"> 
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
            </div>
        </div>
    </div>
  );
}

const testimonials = [
    {
      quote:
        "The sweets from Sweet Home are absolutely divine! Every bite feels like a little piece of heaven.",
      name: "Aarav Sharma",
      title: "Happy Customer",
    },
    {
      quote:
        "I can't get enough of their delicious treats! The variety is impressive, and everything is made with such care.",
      name: "Priya Patel",
      title: "Loyal Patron",
    },
    {
      quote:
        "Sweet Home is my go-to place for special occasions. Their custom cakes and pastries are always a hit at our parties!",
      name: "Ravi Singh",
      title: "Event Planner",
    },
    {
      quote:
        "The staff at Sweet Home is incredibly friendly and helpful. They always recommend the best sweets for my cravings!",
      name: "Anjali Verma",
      title: "Frequent Visitor",
    },
    {
      quote:
        "I love how they use high-quality ingredients. Sweet Home's sweets are not only tasty but also made with love!",
      name: "Kavya Desai",
      title: "Satisfied Customer",
    },
  ];
  
