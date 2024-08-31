"use client";
import { UserButton } from "@clerk/nextjs";
// import { UserButton } from "clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Header = () => {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="flex p-4 justify-between items-center bg-secondary shadow-sm">
      <Image src={"/logo.svg"} width={50} height={60} />
      <ul className="hidden md:flex gap-6">
        <li
          className={`hover:text-primary hover:font-bold transition cursor-pointer ${
            path === "/dashboard" && "text - primary font-bold"
          }`}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition cursor-pointer ${
            path === "/dashboard/question" && "text - primary font-bold"
          }`}
        >
          Questions
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition cursor-pointer ${
            path === "/dashboard/upgrade" && "text - primary font-bold"
          }`}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition cursor-pointer ${
            path === "/dashboard/how" && "text - primary font-bold"
          }`}
        >
          How it is works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
};

export default Header;
