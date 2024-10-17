// "use client";
// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
// // import { HoveredLink, Menu, MenuItem, ProductItem } from "@/ui/navbar-menu";

// import { cn } from "@/lib/utils";
// import Link from "next/link";
//  function Navbar({ className }: { className?: string }) {
//     const [active, setActive] = useState<string | null>(null);
//   return (
//     <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}>
      
//       <Menu setActive={setActive}>
//         <MenuItem setActive={setActive} active={active} item="Home">
//           {/* <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/web-dev">Web Development</HoveredLink>
//             <HoveredLink href="/interface-design">Interface Design</HoveredLink>
//             <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
//             <HoveredLink href="/branding">Branding</HoveredLink>
//           </div> */}
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="About Us">
//         <div className="text-sm grid grid-cols-2 gap-10 p-4">
//     <ProductItem
//         title="Our Story"
//         href="https://algochurn.com"
//         src="https://240group.com/wp-content/uploads/chef-writes-restaurant-about-us-story-for-website-design.jpg"
//         description="Learn about our journey and passion for food."
//     />
//     <ProductItem
//         title="Meet the Team"
//         src="https://media-cdn.tripadvisor.com/media/photo-m/1280/26/02/67/76/meet-the-team-of-bled.jpg"
//         href="https://tailwindmasterkit.com"
//         description="Get to know the chefs and staff behind your meals."
//     />
//     <ProductItem
//         title="Our Values"
//         href="https://gomoonbeam.com"
//         src="https://static.wixstatic.com/media/2814ef_9adb7e5a6312478896602a0647c996e1~mv2.png/v1/fill/w_638,h_358,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/New_Project_53%20(1).png"
//         description="Discover our commitment to quality and sustainability."
//     />
//     <ProductItem
//         title="Testimonials"
//         href="https://userogue.com"
//         src="https://cdn.prod.website-files.com/5eda1af681168b005285091a/60425919689968382fc2034e_blog.jpg"
//         description="See what our customers have to say about us."
//     />
// </div>

//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Reservations">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Make a Reservation</HoveredLink>
//             <HoveredLink href="/individual">Reservation Policy</HoveredLink>
//             <HoveredLink href="/team">Private Dining</HoveredLink>
//             <HoveredLink href="/enterprise">Group Reservations</HoveredLink>
//           </div>
//         </MenuItem>
//       </Menu>
//       </div>
//   )
// }
// export default Navbar
"use client"; 
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home">
                    {/* Add links or content for Home if needed */}
                </MenuItem>
                
                <MenuItem setActive={setActive} active={active} item="About Us">
                    <div className="text-sm grid grid-cols-2 gap-10 p-4 hidden lg:grid">
                        <ProductItem
                            title="Our Story"
                            href="https://algochurn.com"
                            src="https://240group.com/wp-content/uploads/chef-writes-restaurant-about-us-story-for-website-design.jpg"
                            description="Learn about our journey and passion for food."
                        />
                        <ProductItem
                            title="Meet the Team"
                            href="https://tailwindmasterkit.com"
                            src="https://media-cdn.tripadvisor.com/media/photo-m/1280/26/02/67/76/meet-the-team-of-bled.jpg"
                            description="Get to know the chefs and staff behind your meals."
                        />
                        <ProductItem
                            title="Our Values"
                            href="https://gomoonbeam.com"
                            src="https://static.wixstatic.com/media/2814ef_9adb7e5a6312478896602a0647c996e1~mv2.png/v1/fill/w_638,h_358,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/New_Project_53%20(1).png"
                            description="Discover our commitment to quality and sustainability."
                        />
                        <ProductItem
                            title="Testimonials"
                            href="https://userogue.com"
                            src="https://cdn.prod.website-files.com/5eda1af681168b005285091a/60425919689968382fc2034e_blog.jpg"
                            description="See what our customers have to say about us."
                        />
                    </div>
                    <div className="text-sm lg:hidden flex flex-col space-y-2 p-4">
                        <HoveredLink href="https://algochurn.com">Our Story</HoveredLink>
                        <HoveredLink href="https://tailwindmasterkit.com">Meet the Team</HoveredLink>
                        <HoveredLink href="https://gomoonbeam.com">Our Values</HoveredLink>
                        <HoveredLink href="https://userogue.com">Testimonials</HoveredLink>
                    </div>
                </MenuItem>
                
                <MenuItem setActive={setActive} active={active} item="Reservations">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">Make a Reservation</HoveredLink>
                        <HoveredLink href="/individual">Reservation Policy</HoveredLink>
                        <HoveredLink href="/team">Private Dining</HoveredLink>
                        <HoveredLink href="/enterprise">Group Reservations</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default Navbar;
