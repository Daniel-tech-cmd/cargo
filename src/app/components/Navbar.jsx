"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, Bell, HelpCircle, User } from "lucide-react";

export default function Navbar({ bgColor = "transparent" }) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor =
    scroll || bgColor !== "transparent" ? "text-black" : "text-white";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scroll ? "bg-white shadow-md" : bgColor
      )}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span className={cn("text-lg font-bold", textColor)}>MAERSK</span>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={cn("hidden md:flex gap-6 text-sm font-medium", textColor)}
        >
          <Link
            href="/prices"
            className="px-2 py-1 rounded-md hover:bg-gray-200 hover:rounded-[4px]"
          >
            Prices
          </Link>
          <Link
            href="#"
            className="px-2 py-1 rounded-md hover:bg-gray-200 hover:rounded-[4px]"
          >
            Book
          </Link>
          <Link
            href="/track"
            className="px-2 py-1 rounded-md hover:bg-gray-200 hover:rounded-[4px]"
          >
            Tracking
          </Link>
          <Link
            href="#"
            className="px-2 py-1 rounded-md hover:bg-gray-200 hover:rounded-[4px]"
          >
            Schedules
          </Link>
          <Link
            href="/services"
            className="px-2 py-1 rounded-md hover:bg-gray-200 hover:rounded-[4px]"
          >
            Services
          </Link>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4">
          <span className={textColor}>EN</span>
          <Button variant="ghost" size="icon">
            <Search className={`w-5 h-5 ${textColor}`} />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className={`w-5 h-5 ${textColor}`} />
          </Button>
          <Button variant="ghost" size="icon">
            <HelpCircle className={`w-5 h-5 ${textColor}`} />
          </Button>
          <Button variant="ghost" size="icon">
            <User className={`w-5 h-5 ${textColor}`} />
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className={`w-6 h-6 ${textColor}`} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 text-lg font-medium mt-8">
              <Link href="#" className="px-2 py-1 rounded-md hover:bg-gray-200">
                Prices
              </Link>
              <Link href="#" className="px-2 py-1 rounded-md hover:bg-gray-200">
                Book
              </Link>
              <Link href="#" className="px-2 py-1 rounded-md hover:bg-gray-200">
                Tracking
              </Link>
              <Link href="#" className="px-2 py-1 rounded-md hover:bg-gray-200">
                Schedules
              </Link>
              <Link href="#" className="px-2 py-1 rounded-md hover:bg-gray-200">
                Services
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
