// "use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

// const content = [
//   {
//     title: "Collaborative Editing",
//     description:
//       "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-black font-semibold">
//         Collaborative Editing
//       </div>
//     ),
//   },
//   {
//     title: "Real time changes",
//     description:
//       "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//     content: (
//       <div className="h-full w-full  flex items-center justify-center text-black font-semibold">
//         <Image
//           src="/linear.webp"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Version control",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-black font-semibold">
//         Version control
//       </div>
//     ),
//   },
//   {
//     title: "Running out of content",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-black font-semibold">
//         Running out of content
//       </div>
//     ),
//   },
// ];

const content = [
  {
    title: "Comfortable Living Spaces",
    description:
      "At Sweet Home, we design homes that prioritize comfort and style. Every detail is thoughtfully planned to create an environment where you can relax, unwind, and truly feel at home. Experience a perfect blend of functionality and elegance.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--cyan-500))] flex items-center justify-center text-black font-semibold text-center">
        Enjoy Spacious, Comfortable Living
      </div>
    ),
  },
  {
    title: "Tailored to Your Needs",
    description:
      "We understand that every family is unique, and so are their needs. With customizable layouts and personalized design options, Sweet Home ensures your living space reflects your personality and lifestyle preferences.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] flex items-center justify-center text-black font-semibold text-center">
        Customize Your Dream Home to Fit Your Lifestyle
      </div>
    ),
  },
  {
    title: "Eco-Friendly Construction",
    description:
      "Our commitment to sustainability drives us to use eco-friendly materials and energy-efficient technologies. By choosing Sweet Home, you contribute to a greener future without compromising on comfort or luxury.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-400),var(--lime-500))] flex items-center justify-center text-black font-semibold text-center">
        Build a Sustainable Future with Us
      </div>
    ),
  },
  {
    title: "Prime Locations",
    description:
      "Our homes are strategically located in sought-after neighborhoods with easy access to schools, shopping, and recreational facilities. Enjoy the convenience of city life with the tranquility of a peaceful environment.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-black font-semibold text-center">
        Live in the Heart of the Best Neighborhoods
      </div>
    ),
  },
];



export function Version() {
  return (
    <div >
      <div className="bg-gray-900">

           <div className=" text-3xl leading-8 font-extrabold tracking-tight text-white md:text-4xl text-center">Why Choose Sweet Home?</div>
           <div className="mt-4  text-md text-teal-600 font-semibold tracking-wide uppercase text-center ">Discover comfort and style in eco-friendly homes tailored to your needs, with prime locations and 24/7 support. Your dream home awaits!</div>
      </div>
     

      <StickyScroll  content={content} className="mt-8" />
     
    </div>
  );
}
