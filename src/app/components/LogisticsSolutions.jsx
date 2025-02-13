"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "Transportation Services",
    description:
      "Learn how Maersk offers small and large businesses the opportunity to grow.",
    image: "/inland-services.avif",
  },
  {
    title: "Supply Chain and Logistics",
    description:
      "We focus on solving your supply chain needs from end to end, taking the complexity out of container shipping for you.",
    image: "/supply_chain.webp",
  },
  {
    title: "Digital Solutions",
    description:
      "Our tailored online services take the complexity out of shipping by letting you instantly book, manage and track shipments, submit Verified Gross Mass.",
    image: "/digital_solutions.avif",
  },
];

export default function LogisticsSolutions() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Logistics solutions
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          From the farm to your fridge, or the warehouse to your wardrobe,
          Maersk is developing solutions that meet customer needs from one end
          of the supply chain to the other.
        </p>
        <Button className="mt-6 border border-gray-400 text-white hover:text-gray-900 px-6 py-2 rounded-md hover:bg-gray-100">
          See all solutions
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={solution.image}
              alt={solution.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold">{solution.title}</h3>
              <p className="text-gray-600 mt-2">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
