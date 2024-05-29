import Image from "next/image";
import Link from "next/link";
import OmeletteImage from "@/assets/recipe-page-main/assets/images/image-omelette.jpeg";

const SimpleRecipe = () => {
  return (
    <>
      <Link href="/">
        Home
      </Link>
      <div className="p-0 md:py-28 bg-roseWhite flex justify-center text-darkCharcoal font-outline">
        <div className="bg-white pb-8 md:p-8 md:rounded-2xl md:w-3/5">
          <Image
            src={OmeletteImage}
            alt="omelette image"
            className="md:h-[20rem] w-full md:rounded-xl"
          />
          <div className="px-8 md:px-0">
            <h1 className={`font-youngSerif text-4xl mt-12 text-darkCharcoal`}>
              Simple Omelette Recipe
            </h1>
            <p className="text-darkCharcoal mt-8">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
            <div className="mt-8 rounded-xl bg-roseWhite p-4">
              <h2 className="text-2xl text-raspbery-700 font-bold mb-3">
                Preparation time
              </h2>
              <ul className="list-disc list-inside">
                {preparationTime.map(({ title, desc }, index) => {
                  return (
                    <li
                      key={index}
                      className="marker:text-raspbery-700 marker:text-xs py-1"
                    >
                      <span className="font-bold pl-4">{title}</span>: {desc}
                    </li>
                  );
                })}
              </ul>
            </div>
            <h2 className="font-youngSerif text-[1.625rem] text-raspbery-700 mt-8">
              Ingredients
            </h2>
            <ul className="mt-4 list-outside list-disc ml-4">
              {ingredients.map(({ desc }) => {
                return (
                  <li
                    key={desc}
                    className="marker:text-raspbery-700 marker:text-xs py-2 pl-4"
                  >
                    <span className="">{desc}</span>
                  </li>
                );
              })}
            </ul>
            <hr className="my-4" />
            <h2 className="font-youngSerif text-[1.625rem] text-raspbery-700">
              Instructions
            </h2>
            <ol className="list-decimal pl-4 mt-4">
              {instructions.map(({ title, desc }) => {
                return (
                  <li
                    key={title}
                    className="marker:text-raspbery-700 marker:font-bold pl-4 "
                  >
                    <span className="">
                      <span className="font-bold ">{title}</span>: {desc}
                    </span>
                  </li>
                );
              })}
            </ol>
            <hr className="my-8" />
            <h2 className="font-youngSerif text-[1.625rem] text-raspbery-700">
              Nutrition
            </h2>
            <p className="mt-4">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <div className="flex flex-col mt-6 gap-4 last:border-b-0">
              {nutritions.map(({ label, value }) => {
                return (
                  <div
                    key={label}
                    className="flex border-b border-b-gray-200 pl-3 pb-2 last:border-0"
                  >
                    <p className="w-1/2">{label}</p>
                    <p className="font-bold text-raspbery-700">{value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleRecipe;

const preparationTime = [
  {
    title: "Total",
    desc: "Approximately 10 minutes",
  },
  {
    title: "Preparation",
    desc: "5 minutes",
  },
  {
    title: "Total",
    desc: "5 minutes",
  },
];

const ingredients = [
  {
    desc: "2-3 large eggs",
  },
  {
    desc: "Salt, to taste",
  },
  {
    desc: "Pepper, to taste",
  },
  {
    desc: "1 tablespoon of butter or oil",
  },
  {
    desc: "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  },
];

const instructions = [
  {
    title: "Beat the eggs",
    desc: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    title: "Heat the pan",
    desc: "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    title: "Cook the omelette",
    desc: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    title: "Add fillings (optional)",
    desc: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    title: "Fold and serve",
    desc: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    title: "Enjoy",
    desc: "Serve hot, with additional salt and pepper if needed.",
  },
];

const nutritions = [
  {
    label: "Calories",
    value: "277kcal",
  },
  {
    label: "Carbs",
    value: "0g",
  },
  {
    label: "Protein",
    value: "20g",
  },
  {
    label: "Fat",
    value: "22g",
  },
];
