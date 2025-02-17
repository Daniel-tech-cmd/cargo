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
  const logocolor = scroll || bgColor !== "transparent" ? "#000" : "#ffff";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scroll ? "bg-white shadow-md" : bgColor
      )}
    >
      <div className="flex justify-between items-center px-6 py-4  mx-auto">
        {/* Logo */}
        <div className="flex justify-center items-center ">
          <a href="/" className="flex items-center" aria-label="Go to homepage">
            <svg
              className="w-24 h-auto sm:w-32"
              viewBox="0 0 170 38"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <g transform="translate(-104 -21)">
                  <g transform="translate(104 21)">
                    {/* <g transform="translate(51.5 10)" fill="#FFFFFF">
                      <polyline points="0.2 17 0.2 0.6 4.6 0.6 10.2 12.9 15.7 0.6 20 0.6 20 17 16.3 17 16.3 7.5 12.1 17 8.2 17 4 7.5 4 17 0.2 17"></polyline>
                      <path d="M34.6 10.7L31.6 3.7 28.6 10.7H34.6ZM25.9 17H21.6L28.9 0.6h5.3l7.4 16.4H37.4l-1.5-3.3H27.3l-1.4 3.3Z"></path>
                    </g> */}
                    <g
                      id="Text"
                      transform="translate(51.502463, 9.973333)"
                      fill={`${logocolor}`}
                    >
                      <polyline
                        className="ign-logo__fill"
                        id="Fill-4"
                        points="0.225647399 17.0377015 0.225647399 0.584446483 4.63718082 0.584446483 10.2269671 12.8797823 15.7337777 0.584446483 19.9599991 0.584446483 19.9599991 17.0377015 16.3222127 17.0377015 16.3222127 7.46604648 12.1250328 17.0377015 8.24730872 17.0377015 3.99619469 7.51820061 3.99619469 17.0377015 0.225647399 17.0377015"
                      ></polyline>
                      <path
                        className="ign-logo__fill"
                        d="M34.599652,10.6673492 L31.5558322,3.69310703 L28.5818502,10.6673492 L34.599652,10.6673492 Z M25.8609436,17.0377015 L21.5828626,17.0377015 L28.9365707,0.584446483 L34.2034438,0.584446483 L41.6097031,17.0377015 L37.386939,17.0377015 L35.9293352,13.7602263 L27.2736024,13.7602263 L25.8609436,17.0377015 L25.8609436,17.0377015 Z"
                        id="Fill-5"
                      ></path>
                      <polyline
                        className="ign-logo__fill"
                        id="Fill-6"
                        points="43.3155421 17.0377015 43.3155421 0.584446483 59.1445112 0.584446483 59.1445112 3.87427401 47.1386406 3.87427401 47.1386406 7.1421419 57.432449 7.1421419 57.432449 10.353052 47.1386406 10.353052 47.1386406 13.7465015 59.1735527 13.7465015 59.1735527 17.0377015 43.3155421 17.0377015"
                      ></polyline>
                      <path
                        className="ign-logo__fill"
                        d="M66.1296696,8.13924648 L74.4465856,8.13924648 L74.4465856,3.87427401 L66.1296696,3.87427401 L66.1296696,8.13924648 Z M62.252637,17.0377015 L62.252637,0.584446483 L75.4983007,0.584446483 C77.2677543,0.584446483 78.2952682,1.60076575 78.2952682,3.34381162 L78.2952682,8.871463 C78.2952682,10.143063 77.1605776,11.2925125 74.961034,11.2925125 C74.8365707,11.2986887 74.7093415,11.2925125 74.578655,11.2925125 L78.4342523,17.0377015 L74.1789895,17.0377015 L70.523225,11.411918 L66.1296696,11.411918 L66.1296696,17.0377015 L62.252637,17.0377015 L62.252637,17.0377015 Z"
                        id="Fill-7"
                      ></path>
                      <path
                        className="ign-logo__fill"
                        d="M85.2700547,17.0473089 L83.9576581,17.0473089 C82.244213,17.0473089 81.4192977,16.0646153 81.4192977,14.633808 L81.4192977,12.4845089 L85.2700547,12.4845089 L85.2700547,13.7574813 L93.4521354,13.7574813 L93.4521354,10.3894226 C93.4521354,10.3894226 85.5646179,10.3894226 84.0669092,10.3894226 C82.5685091,10.3894226 81.4891354,9.38957309 81.4891354,8.00199878 L81.4891354,3.11735291 C81.4891354,1.63919511 82.6639309,0.594740061 84.0931848,0.594740061 C85.5217472,0.594740061 94.8219234,0.594740061 94.8219234,0.594740061 C96.2719212,0.594740061 97.2752339,1.66870336 97.2752339,3.22166116 C97.2752339,4.77256024 97.2752339,5.1849896 97.2752339,5.1849896 L93.4521354,5.1849896 L93.4521354,3.88456758 L85.2700547,3.88456758 L85.2700547,7.12498593 L94.6283138,7.12498593 C96.0098567,7.12498593 97.2752339,8.03219327 97.2752339,9.77867034 L97.2752339,14.4746006 C97.2752339,16.0742226 96.3811723,17.0473089 94.709215,17.0473089 C93.0372576,17.0473089 85.2700547,17.0473089 85.2700547,17.0473089"
                        id="Fill-8"
                      ></path>
                      <polyline
                        className="ign-logo__fill"
                        id="Fill-9"
                        points="100.970412 17.0473089 100.970412 0.592681346 104.900687 0.592681346 104.900687 7.17370887 112.387156 0.592681346 117.708655 0.592681346 108.77772 8.23600612 118.030185 17.0473089 112.520608 17.0473089 104.900687 9.56319144 104.900687 17.0473089 100.970412 17.0473089"
                      ></polyline>
                    </g>
                    <g fillRule="nonzero">
                      <path
                        fill="#42B0D5"
                        d="M4.3 0h27c2.4 0 4.3 1.9 4.3 4.3v28.9c0 2.4-1.9 4.3-4.3 4.3h-27C1.9 37.4 0 35.5 0 33.1V4.3C0 3.1 0.4 2 1.3 1.3 2.1 0.5 3.1 0 4.3 0Z"
                      />
                      <polygon
                        fill="#FFFFFF"
                        points="23.5 17.7 30.5 8.9 30.5 8.9 20.3 13.7 17.8 2.8 17.8 2.8 15.3 13.7 5.1 8.9 5.1 8.9 12.1 17.7 2 22.5 2 22.5 13.3 22.5 10.8 33.4 10.8 33.4 17.8 24.7 24.9 33.4 24.9 33.4 22.4 22.5 33.7 22.5 33.7 22.5"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
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
            href="/track"
            className="px-2 py-1 rounded-md hover:bg-gray-200 hover:rounded-[4px]"
          >
            Tracking
          </Link>
          <Link
            href="/customs"
            className="px-2 py-1 rounded-md hover:bg-gray-200 hover:rounded-[4px]"
          >
            Customs
          </Link>
          <Link
            href="/services"
            className="px-2 py-1 rounded-md hover:bg-gray-200 hover:rounded-[4px]"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="px-2 py-1 rounded-md hover:bg-gray-200 hover:rounded-[4px]"
          >
            Contact Us
          </Link>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4">
          <span className={textColor}>EN</span>
          <Button variant="ghost" size="icon">
            <Search className={`w-5 h-5 ${textColor}`} />
          </Button>
          <Link href={"/user/login"} variant="ghost" size="icon">
            <Bell className={`w-5 h-5 ${textColor}`} />
          </Link>
          <Button variant="ghost" size="icon">
            <HelpCircle className={`w-5 h-5 ${textColor}`} />
          </Button>
          <Link href={"/user/login"} variant="ghost" size="icon">
            <User className={`w-4 h-4 ${textColor}`} />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex gap-5s">
          {" "}
          <div className="flex align-center">
            <div className="flex align-center md:hidden items-center gap-5">
              <Link href={"/user/login"} variant="ghost" size="icon">
                <Bell className={`w-5 h-5 ${textColor}`} />
              </Link>

              <Link href={"/user/login"} variant="ghost" size="icon">
                <User className={`w-4 h-4 ${textColor}`} />
              </Link>
            </div>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <svg
                  className={`h-8 w-8 ${textColor}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white shadow-lg border border-gray-300">
              <nav className="flex flex-col gap-3 text-sm font-medium mt-5 px-1">
                {[
                  { name: "Prices", href: "/prices" },

                  { name: "Tracking", href: "/track" },
                  { name: "Customs", href: "/customs" },
                  { name: "Services", href: "/services" },
                  { name: "Contact us", href: "/contact" },
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
      </div>
    </header>
  );
}
