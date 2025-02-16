"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import TrackingTabs from "./Track";
import Link from "next/link";

export default function Banner() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center text-left bg-cover bg-center p-4 md:p-6"
      style={{
        position: "relative",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#00243d",
          position: "absolute",
          zIndex: -1,
        }}
      >
        <div
          style={{
            backgroundImage: "url('/banner.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "absolute",
            inset: 0,
            opacity: 1,
            transition: ".5s ease opacity",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-3xl px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
          See how truly integrated logistics delivers
        </h1>
        <p className="mt-2 text-base sm:text-lg md:text-xl">
          With truly integrated logistics, there’s always a new way to keep your
          goods moving and your business growing.
        </p>
        <Link
          href={"/prices"}
          className="mt-8 bg-white text-black px-4 py-2 text-base font-medium rounded-md inline-block"
        >
          Discover new paths
        </Link>
      </div>

      {/* Tracking Box */}
      <div
        className="relative z-10 mt-6 md:mt-0"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <TrackingTabs />
      </div>

      {/* Feedback Button */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded-l-md rotate-90 cursor-pointer">
        Feedback
      </div>
    </section>
  );
}
