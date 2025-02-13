"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  FaShip,
  FaWarehouse,
  FaBoxes,
  FaMapMarkerAlt,
  FaIndustry,
} from "react-icons/fa";

export default function LogisticsServices() {
  const [selectedTab, setSelectedTab] = useState("services");

  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/services.avif')" }}
    >
      <div className="w-full h-[500px] bg-black bg-opacity-50 flex flex-col justify-center items-center py-16 px-4 sm:px-8">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center">
          Logistics Services
        </h2>
        <p className="text-gray-300 mt-2 text-center">
          Eliminate complexity from your supply chain
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-6 text-white">
          <div className="flex flex-col items-center cursor-pointer">
            <FaShip size={30} className="opacity-80" />
            <span className="text-sm sm:text-base">Transport</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <FaWarehouse size={30} className="opacity-80" />
            <span className="text-sm sm:text-base">Store</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <FaBoxes size={30} className="opacity-80" />
            <span className="text-sm sm:text-base">Clear & Protect</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <FaMapMarkerAlt size={30} className="opacity-80" />
            <span className="text-sm sm:text-base">Logistics Management</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <FaIndustry size={30} className="opacity-80" />
            <span className="text-sm sm:text-base">By Industry</span>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-t-xl mt-8 p-4 sm:p-6">
        <div className="flex flex-wrap justify-center gap-4 border-b pb-2">
          {[
            { key: "services", label: "Services" },
            { key: "tracking", label: "Tracking" },
            { key: "schedules", label: "Schedules" },
            { key: "offices", label: "Offices" },
          ].map((tab) => (
            <button
              key={tab.key}
              className={`pb-2 ${
                selectedTab === tab.key
                  ? "border-b-2 border-black font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => setSelectedTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Select>
            <SelectTrigger className="w-full sm:w-60">
              <SelectValue placeholder="Service Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="transport">Transport</SelectItem>
              <SelectItem value="storage">Storage</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full sm:w-60">
              <SelectValue placeholder="Freight Mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="air">Air</SelectItem>
              <SelectItem value="ocean">Ocean</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full sm:w-60">
              <SelectValue placeholder="Industries" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="automotive">Automotive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
