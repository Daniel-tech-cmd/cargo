"use client";

import Image from "next/image";
import { useState } from "react";

const categories = [
  "Growth",
  "Integrated Logistics",
  "Sustainability",
  "Resilience",
];

const data = {
  Growth: [
    {
      id: 1,
      image: "/growth.avif",
      title: "Expanding Global Trade Routes and Their Impact",
      date: "5 Feb 2025",
    },
    {
      id: 2,
      image: "/growth-1.webp",
      title: "Key Factors Driving Economic Growth in 2025",
      date: "6 Feb 2025",
    },
    {
      id: 3,
      image: "/growth-2.avif",
      title: "Emerging Markets and Their Influence on Global Supply Chains",
      date: "7 Feb 2025",
    },
    {
      id: 4,
      image: "/growth-3.avif",
      title: "The Role of Technology in Business Expansion",
      date: "8 Feb 2025",
    },
  ],
  "Integrated Logistics": [
    {
      id: 1,
      image: "/images/logistics1.jpg",
      title: "Cold Chain Logistics: Meeting Time-Sensitive Needs",
      date: "5 Feb 2025",
    },
    {
      id: 2,
      image: "/images/logistics2.jpg",
      title: "Optimizing Last-Mile Delivery for Efficiency",
      date: "6 Feb 2025",
    },
    {
      id: 3,
      image: "/images/logistics3.jpg",
      title: "How AI is Transforming Logistics Management",
      date: "7 Feb 2025",
    },
    {
      id: 4,
      image: "/images/logistics4.jpg",
      title: "The Future of Freight Transportation",
      date: "8 Feb 2025",
    },
  ],
  Sustainability: [
    {
      id: 1,
      image: "/images/sustain1.jpg",
      title: "Sustainable Practices in the Logistics Industry",
      date: "5 Feb 2025",
    },
    {
      id: 2,
      image: "/images/sustain2.jpg",
      title: "Reducing Carbon Footprints in Supply Chains",
      date: "6 Feb 2025",
    },
    {
      id: 3,
      image: "/images/sustain3.jpg",
      title: "The Rise of Green Warehouses",
      date: "7 Feb 2025",
    },
    {
      id: 4,
      image: "/images/sustain4.jpg",
      title: "Eco-Friendly Packaging Solutions",
      date: "8 Feb 2025",
    },
  ],
  Resilience: [
    {
      id: 1,
      image: "/images/resilience1.jpg",
      title: "How to Build a More Resilient Supply Chain",
      date: "5 Feb 2025",
    },
    {
      id: 2,
      image: "/images/resilience2.jpg",
      title: "Crisis Management Strategies for Logistics",
      date: "6 Feb 2025",
    },
    {
      id: 3,
      image: "/images/resilience3.jpg",
      title: "Navigating Supply Chain Disruptions in 2025",
      date: "7 Feb 2025",
    },
    {
      id: 4,
      image: "/images/resilience4.jpg",
      title: "The Role of AI in Supply Chain Resilience",
      date: "8 Feb 2025",
    },
  ],
};

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState("Growth");
  const selectedData = data[selectedCategory];

  return (
    <div className="p-6 max-w-6xl m-auto">
      <h2 className="text-2xl font-bold">Latest Insights</h2>
      <p className="text-gray-600">
        Access the latest articles, trends, and research.
      </p>

      <select
        className="mt-4 p-2 border rounded"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div className="flex flex-col gap-5 mt-16 md:flex-row">
        {selectedData && (
          <>
            <div className="w-[100%] md:w-[50%] h-[408px]">
              <div className="relative  group w-[100%] h-[100%]">
                <Image
                  src={selectedData[0].image}
                  alt={selectedData[0].title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full rounded-b-lg">
                  <p className="text-sm font-semibold">
                    {selectedData[0].title}
                  </p>
                  <p className="text-xs">{selectedData[0].date}</p>
                </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[50%] h-[400px]">
              <div className="relative h-[200px] md:h-[200px] group">
                <Image
                  src={selectedData[1].image}
                  alt={selectedData[1].title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full rounded-b-lg">
                  <p className="text-sm font-semibold">
                    {selectedData[1].title}
                  </p>
                  <p className="text-xs">{selectedData[1].date}</p>
                </div>
              </div>
              <div className="flex gap-5 mt-5">
                <div className="relative h-[200px] w-[50%] md:h-[200px] group">
                  <Image
                    src={selectedData[2].image}
                    alt={selectedData[2].title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full rounded-b-lg">
                    <p className="text-sm font-semibold">
                      {selectedData[2].title}
                    </p>
                    <p className="text-xs">{selectedData[2].date}</p>
                  </div>
                </div>
                <div className="relative h-[200px] w-[50%] md:h-[200px] group">
                  <Image
                    src={selectedData[3].image}
                    alt={selectedData[3].title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full rounded-b-lg">
                    <p className="text-sm font-semibold">
                      {selectedData[3].title}
                    </p>
                    <p className="text-xs">{selectedData[3].date}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
