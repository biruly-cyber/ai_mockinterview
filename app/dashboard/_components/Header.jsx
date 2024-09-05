"use client";
import { UserButton } from "@clerk/nextjs";
// import { UserButton } from "clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const path = usePathname();

  const redirect = (path) => {
    router.replace(path);
  };

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
          onClick={() => redirect("/dashboard")}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition cursor-pointer ${
            path === "/dashboard/question" && "text - primary font-bold"
          }`}
          onClick={() => redirect("/dashboard/question")}
        >
          Questions
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition cursor-pointer ${
            path === "/dashboard/upgrade" && "text - primary font-bold"
          }`}
          onClick={() => redirect("/dashboard/upgrade")}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition cursor-pointer ${
            path === "/dashboard/how" && "text - primary font-bold"
          }`}
          onClick={() => redirect("/dashboard/how")}
        >
          How it is works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
};

export default Header;
