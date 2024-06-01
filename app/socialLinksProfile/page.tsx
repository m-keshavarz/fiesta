"use client";

import Image from "next/image";
import Avatar from "@/assets/social-links-profile-main/assets/images/avatar-jessica.jpeg";

const SocialLinksProfile = () => {
  return (
    <div className="bg-woodsmoke py-20">
      <div className="rounded-[10px] w-[23%] mx-auto bg-shark py-8 px-4 flex flex-col items-center content-center">
        <Image
          src={Avatar}
          alt="profile-pic"
          className="rounded-full w-[5rem] h-[5rem]"
        />
        <div className="mt-4">
          <p className="font-bold text-white text-2xl text-center">
            Jessica Randall
          </p>
          <p className="text-inchWorm text-center mt-2 text-sm">
            London, United Kingdom
          </p>
        </div>
        <p className="mt-8 text-white text-sm">{`"Front-end developer and avid reader."`}</p>
        <div className="flex flex-col gap-4 mt-4 w-full">
          {links.map(({ label, link }) => {
            return (
              <button
                key={label}
                onClick={() => console.log("hey")}
                className="grow transition duration-300 text-sm h-10 rounded-[10px] bg-mineShaft hover:bg-inchWorm hover:text-shark text-white"
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialLinksProfile;

const links = [
  {
    label: "GitHub",
    link: "/socialLinksProfile",
  },
  {
    label: "Frontend Mentor",
    link: "/socialLinksProfile",
  },
  {
    label: "Linkedin",
    link: "/socialLinksProfile",
  },
  {
    label: "Twitter",
    link: "/socialLinksProfile",
  },
  {
    label: "Instagram",
    link: "/socialLinksProfile",
  },
];
