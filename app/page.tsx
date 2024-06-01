import Link from "next/link";
import { links } from "@/lib/links";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="mb-4 font-bol text-2xl">
        Welcome to my components project
      </h1>
      <ul className="list-disc pl-4 underline">
        {links.map(({ label, link }) => {
          return (
            <li key={link} className="hover:text-orange-800">
              <Link href={link}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
