"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuthContext } from "../hooks/useAuthContext";
import useSignup from "../hooks/useSignup";
import Image from "next/image";
import {
  Menu,
  Search,
  Bell,
  HelpCircle,
  User,
  X,
  ChevronRight,
  LogOut,
  Gift,
  User2Icon,
} from "lucide-react";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaMobile } from "react-icons/fa";

export default function Navbar({ bgColor = "transparent" }) {
  const [scroll, setScroll] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useSignup();

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
              <Menu className="w-6 h-6 text-gray-800" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white shadow-lg border border-gray-300">
            <div className="flex items-center justify-between  py-3 border-b border-gray-300">
              {/* Logo */}
              <Image src="/logo.png" alt="Logo" width={90} height={35} />
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <X className="w-6 h-6 text-gray-800" />
                </Button>
              </SheetTrigger>
            </div>

            <nav className="flex flex-col gap-3 text-sm font-medium mt-5 px-1">
              {[
                { name: "Prices", href: "#" },
                { name: "Book", href: "#" },
                { name: "Tracking", href: "#" },
                { name: "Schedules", href: "#" },
                { name: "Services", href: "#" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-200 transition"
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </Link>
              ))}

              {/* Admin Link - Visible only if user.role === "admin" */}
              {user?.role === "admin" && (
                <>
                  <Link
                    href="/admin/send-gift"
                    className="flex items-center justify-between px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <span>Send Gift</span>
                    <Gift className="w-5 h-5 text-white" />
                  </Link>
                  <Link
                    href="/admin"
                    className="flex items-center justify-between px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <span>Admin Panel</span>
                    <MdAdminPanelSettings className="w-5 h-5 text-white" />
                  </Link>
                  <Link
                    href="/admin/add-number"
                    className="flex items-center justify-between px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <span>Add Number</span>
                    <FaMobile className="w-5 h-5 text-white" />
                  </Link>
                  <Link
                    href="/admin/user"
                    className="flex items-center justify-between px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <span>Users</span>
                    <User2Icon className="w-5 h-5 text-white" />
                  </Link>
                </>
              )}
              {user && (
                <button
                  href="/admin"
                  className="flex items-center justify-between px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                  onClick={logout}
                >
                  <span>Logout</span>
                  <LogOut className="w-5 h-5 text-white" />
                </button>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
