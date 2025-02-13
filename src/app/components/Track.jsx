"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const tabs = [
  {
    name: "Tracking",
    placeholder: "B/L, container number or parcel",
    button: "Track",
  },
  {
    name: "Schedules",
    placeholder: ["Origin", "Destination"],
    button: "Search",
  },
  {
    name: "Local offices",
    placeholder: "Enter country/region name",
    button: "Find",
  },
];

export default function TrackingTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="w-full max-w-[400px] min-w-full md:min-w-[400px] bg-gray-900 text-white shadow-lg rounded-lg p-4">
      <div className="flex border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`flex-1 text-center py-2 font-medium ${
              activeTab.name === tab.name
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {activeTab.name === "Schedules" ? (
          <div className="space-y-3">
            {activeTab.placeholder.map((ph, index) => (
              <div
                key={index}
                className="flex items-center gap-2 border p-2 rounded-md bg-gray-800"
              >
                <IoLocationOutline className="text-gray-400" />
                <input
                  type="text"
                  placeholder={ph}
                  className="outline-none w-full bg-transparent text-white"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center gap-2 border p-2 rounded-md bg-gray-800">
            {activeTab.name === "Tracking" && (
              <FaMapMarkerAlt className="text-gray-400" />
            )}
            <input
              type="text"
              placeholder={activeTab.placeholder}
              className="outline-none w-full bg-transparent text-white"
            />
          </div>
        )}
        <Button className="mt-4 bg-gray-700 text-white py-2 px-6 rounded-md hover:bg-blue-600 w-fit mx-auto">
          {activeTab.button}
        </Button>
      </div>
    </div>
  );
}
