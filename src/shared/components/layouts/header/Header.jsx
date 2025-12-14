"use client";
import { cn } from "@/shared/lib/utils";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  console.log(isScrolled);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 p-4",
        isScrolled ? "bg-white" : ""
      )}
    >
      Header
    </header>
  );
}