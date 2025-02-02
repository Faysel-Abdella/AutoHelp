import Link from "next/link";
import React from "react";

import navMenu from "@/app/data/nav";
import { ArrowDownRight } from "lucide-react";

const Navbar = () => {
  return (
    <header className="z-50 font-inter">
      <nav className="pt-6 flex items-center justify-center">
        <ul className="flex items-center w-fit bg-background border-[0.5px] border-main drop-shadow-main rounded-large py-2 px-2">
          {navMenu.map(({ label, sectionId }, index) => (
            <li key={index}>
              <Link
                href={sectionId}
                className="font-semibold text-foreground leading-4  px-4"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="text-background">
            <button className="flex items-center justify-center gap-3 pl-4 pr-2 bg-mainBlue rounded-large">
              <span className="font-medium py-2">Get Started</span>

              <div className="bg-background rounded-full scale-125">
                <ArrowDownRight strokeWidth={1.5} className="text-foreground" />
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
