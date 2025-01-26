'use client';
import { useState, useEffect } from "react";
import { Home, TerminalIcon, Info, Menu, X } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { useTheme } from "next-themes";
import HyperText from "./ui/hyper-text";
import ShineBorder from "@/components/ui/shine-border";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navbarItems = [
    { name: "Home", href: "home", icon: Home },
    { name: "Projects", href: "projects", icon: TerminalIcon },
    { name: "About", href: "about", icon: Info },
  ];

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Highlight active section
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let visibleSection = "home";
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSection = entry.target.id;
        }
      });
      setActiveSection(visibleSection);
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleSidebarItemClick = (href: string) => {
    setActiveSection(href);
    setIsSidebarOpen(false); // Close sidebar
  };

  return (
    <nav
      className={`p-4 lg:px-12 bg-background/50 sticky top-0 backdrop-blur-md border-b z-10 transition-transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black dark:text-white text-lg font-bold">
          <Link
            href="/"
            className="uppercase text-3xl font-bold tracking-widest font-sans relative"
          >
            <HyperText children={"Aditya"} className={"font-extrabold"} duration={2000} />
          </Link>
        </div>

        {/* Mobile Sidebar */}
        <div className="lg:hidden flex items-center">
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open menu" className="text-white">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background p-4">
              <SheetHeader>
                <button
                  aria-label="Close menu"
                  className="text-white absolute top-4 right-4"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <X size={24} />
                </button>
              </SheetHeader>
              <div className="flex flex-col items-center space-y-6 mt-8">
                {navbarItems.map((item) => (
                  <Link
                    href={`#${item.href}`}
                    key={item.name}
                    className="text-xl font-medium flex items-center space-x-2"
                    onClick={() => handleSidebarItemClick(item.href)}
                  >
                    <item.icon />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <ShineBorder
          color={`${theme === "dark" ? "#fff" : "#000"}`}
          borderWidth={4}
          className="hidden lg:flex gap-5 min-w-96 justify-center items-center backdrop-blur-lg rounded-full p-2"
        >
          {navbarItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <Link
                href={`#${item.href}`}
                key={item.name}
                className={`${
                  theme === "dark"
                    ? isActive
                      ? "bg-white text-black"
                      : "text-white bg-black"
                    : isActive
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } flex items-center justify-center gap-2 uppercase duration-200 ease-linear w-36 font-medium rounded-full p-2 text-center`}
              >
                <item.icon
                  className={`${
                    theme === "dark"
                      ? isActive
                        ? "text-black"
                        : "text-white"
                      : isActive
                      ? "text-white"
                      : "text-black"
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </ShineBorder>

        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
