import Link from "next/link";
import React from "react";
import { useId } from "react";

export function Features() {
  return (
    <div className="py-20 lg:py-40 bg-gray-900">
        <div className="text-lg text-teal-600 font-semibold tracking-wide uppercase text-center">Delight in Sweet Home’s Finest Desserts </div>
        <div className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white md:text-4xl text-center">Delicious desserts, crafted to perfection!!</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[40px] md:gap-2 max-w-5xl mx-auto mt-12">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative hover:border shadow-2xl border-teal-800 bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <div className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
                <img src= {feature.image} alt={ feature.image} className=" rounded-lg"/>
             
            </div>
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20 mt-4">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-20 text-center">
        <Link href={'/All-Featurs'} 
        className="px-4 py-2 rounded-lg border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
        View All dishes
        </Link>

      </div>
    </div>
  );
}

const grid = [
    {
      "title": "Classic Tiramisu",
      "description": "An Italian favorite with layers of espresso-soaked ladyfingers, mascarpone cream, and cocoa powder for a rich and satisfying dessert.",
      "image": "https://www.nonnabox.com/wp-content/uploads/2016/01/classic_tiramisu_recipe.jpg"
    },
    {
      "title": "Molten Chocolate Lava Cake",
      "description": "Indulge in our decadent molten lava cake, with a gooey chocolate center that flows out with every bite.",
      "image": "https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg"
    },
    {
      "title": "Baklava Delight",
      "description": "A crispy, honey-drenched pastry filled with layers of nuts and spices. Perfect for any occasion with a taste of tradition.",
      "image": "https://www.archanaskitchen.com//images/archanaskitchen/Dessert_Gourmet_Favorites/baklava_turkish_sweet_delight_Recipe_shutterstock_192914432.jpg"
    },
    {
      "title": "Strawberry Cheesecake",
      "description": "Our smooth and creamy cheesecake is topped with fresh strawberries and a drizzle of berry glaze for a refreshing finish.",
      "image": "https://preppykitchen.com/wp-content/uploads/2021/07/No-Bake-Strawberry-Cheesecake-Recipe-n.jpg"
    },
    {
      "title": "Macarons Assortment",
      "description": "Colorful and delicate French macarons in various flavors like raspberry, pistachio, and chocolate, perfect for a sweet snack.",
      "image": "https://www.bettycrocker.com/-/media/GMI/Core-Sites/BC/Images/BC/content/how-to/ingredients-and-preparation/macarons-vs-macaroons/macarons-vs-macaroons-hero.jpg?sc_lang=en"
    },
    {
      "title": "Lemon Tart",
      "description": "A tangy lemon curd nestled in a buttery pastry shell, topped with a dusting of powdered sugar.",
      "image": "https://thecafesucrefarine.com/wp-content/uploads/2022/04/French-Lemon-Tart-6.jpg"
    },
    {
      "title": "Churros with Chocolate Dip",
      "description": "Golden-fried churros rolled in cinnamon sugar, served with a warm chocolate dip on the side.",
      "image": "https://foodisafourletterword.com/wp-content/uploads/2017/11/IMG_3830.jpg"
    },
    {
      "title": "Creme Brûlée",
      "description": "Our take on the classic creme brûlée, with a perfectly torched caramelized sugar crust atop vanilla bean custard.",
      "image": "https://www.nestleprofessional.in/sites/default/files/2022-07/Vanilla-Creme-Brulee.jpg"
    },
    {
      "title": "Pistachio Baklava Ice Cream Sandwich",
      "description": "A fusion of baklava and ice cream, with a pistachio ice cream filling between flaky, honey-coated layers.",
      "image": "https://media-cdn2.greatbritishchefs.com/media/q11fhr1n/img71560.whqc_768x512q80.jpg"
    }
  ];
  

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
