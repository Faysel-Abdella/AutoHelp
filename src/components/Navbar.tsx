"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowDownRight, Menu, X } from "lucide-react";
import navMenu from "@/data/nav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header className="relative z-50 font-inter w-full pt-6">
      <nav className="container mx-auto px-4 py-3 md:bg-background md:border-[0.5px] border-main md:drop-shadow-main md:rounded-large md:w-fit">
        <div className="flex items-center justify-end md:justify-center">
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex items-center space-x-4">
              {navMenu.map(({ label, sectionId }, index) => (
                <li key={index}>
                  <Link
                    href={sectionId}
                    className="font-semibold text-foreground leading-4 px-4 py-2 hover:text-mainBlue transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <button>
              <Link
                href="#contact-us"
                className="flex items-center justify-center gap-3 pl-4 pr-2 bg-mainBlue rounded-large"
              >
                <span className="font-medium py-2 text-background">
                  Get Started
                </span>
                <div className="bg-background rounded-full scale-125">
                  <ArrowDownRight
                    strokeWidth={1.5}
                    className="text-foreground"
                  />
                </div>
              </Link>
            </button>
          </div>

          <button className="md:hidden z-50" onClick={toggleMenu}>
            {isOpen ? (
              <div className="bg-background p-3 rounded-full">
                <X className="size-8 text-foreground bg-background " />
              </div>
            ) : (
              <div className="bg-background p-3 rounded-full">
                <Menu className="size-8 text-foreground bg-background " />
              </div>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 bg-foreground transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center space-y-8">
              {navMenu.map(({ label, sectionId }, index) => (
                <li key={index}>
                  <Link
                    href={sectionId}
                    className="font-semibold text-background text-2xl leading-4 block py-2 hover:text-mainBlue transition-colors"
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="mt-8 flex items-center justify-center gap-3  px-14 bg-mainBlue rounded-large ">
              <span className="font-medium py-4 text-background">
                Get Started
              </span>

              <div className="bg-background rounded-full scale-125">
                <ArrowDownRight strokeWidth={1.5} className="text-foreground" />
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
