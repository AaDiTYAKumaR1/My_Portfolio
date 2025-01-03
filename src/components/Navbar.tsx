'use client';
import { useState, useEffect } from "react";
import { Home, TerminalIcon, Info } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { useTheme } from "next-themes";
import HyperText from "./ui/hyper-text";
import ShineBorder from "@/components/ui/shine-border";

const Navbar = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home"); // Default to "home"
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navbarItems = [
    { name: "Home", href: "home", icon: Home },
    { name: "Projects", href: "projects", icon: TerminalIcon },
    { name: "About", href: "about", icon: Info },
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  useEffect(() => {
    const observerCallback = (entries) => {
      let visibleSection = "home"; // Default to "home"
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSection = entry.target.id;
        }
      });
      setActiveSection(visibleSection); // Update active section
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className={`p-4 lg:px-12 bg-background/50 sticky top-0 backdrop-blur-md border-b z-10 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto flex justify-between items-center transition-opacity">
        {/* Logo */}
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
                className={`
                  ${
                    theme === "dark"
                      ? isActive
                        ? "bg-white text-black"
                        : "text-white bg-black"
                      : isActive
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }
                  flex items-center justify-center gap-2 uppercase duration-200 ease-linear w-36 font-medium rounded-full p-2 text-center`}
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

        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
