import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="mb-4 font-bol text-2xl">
        Welcome to my components project
      </h1>
      <ul className="list-disc pl-4 underline">
        <li>
          <Link href="/simpleRecipe" className="hover:text-orange-800">
            Simple Omelette Recipe
          </Link>
        </li>
      </ul>
    </div>
  );
}
