"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Home, TerminalIcon, Info } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BorderBeam } from "@/components/ui/border-beam";
import ShineBorder from "@/components/ui/shine-border";
import { useTheme } from "next-themes";
import HyperText from "./ui/hyper-text";

const Navbar = () => {
  const [isActive, setisActive] = useState("/")
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const navbarItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: TerminalIcon,
    },
    {
      name: "About",
      href: "#about",
      icon: Info,
    },
  ];

  // Handle mobile menu toggle
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="p-4 lg:px-12  bg-background/50 sticky top-0 backdrop-blur-md border-b z-10">
      <div className="container mx-auto flex justify-between items-center transition-opacity">
        <div className="text-black dark:text-white text-lg font-bold">
          <Link
            href="/"
            className="uppercase text-3xl font-bold tracking-widest font-sans relative"
          >
            <HyperText
              children={"Aditya"}
              className={"font-extrabold"}
              duration={2000}
            />
          </Link>
        </div>

        <ShineBorder
          color={`${theme === "dark" ? "#fff" : "#000"}`}
          borderWidth={4}
          className="hidden lg:flex gap-5 min-w-96 justify-center items-center  backdrop-blur-lg rounded-full p-2"
        >
          {navbarItems.map((item) => {
            const tab=
            isActive ===item.href
            return (
              <Link
                href={item.href} 
                key={item.name}
                onClick={() => setisActive(item.href)}
                className={`
                  ${
                    theme === "dark"
                      ? (tab
                        ? "bg-white text-black"
                        : "text-white bg-black")
                      : (tab
                      ? "bg-black text-white"
                      : "bg-white text-black")
                  }
                 flex items-center justify-center gap-2 uppercase duration-200 ease-linear w-36 font-medium rounded-full p-2 text-center`}
              >
                <item.icon
                  className={`${
                    theme === "dark" ? tab ? "text-black" : "text-white" : tab ? "text-white" : "text-black"
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </ShineBorder>

        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full bg-white dark:bg-black text-black dark:text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger />
            <SheetContent>
              <SheetHeader className={""}>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <SheetDescription>
                {navbarItems.map((item) => {
                  const tab=isActive ===item.href
                  return (
                    <Link
                      href={item.href}
                      key={item.name}
                      className={`${
                        tab && "bg-white text-black"
                      } flex items-center gap-2 uppercase hover:bg-white duration-200 ease-linear w-full font-medium hover:text-black rounded-full p-2 text-center my-2`}
                    >
                      <item.icon /> {item.name}
                    </Link>
                  );
                })}
              </SheetDescription>
            </SheetContent>
          </Sheet>
        )}

        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
