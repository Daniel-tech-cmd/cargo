"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: 1,
    type: "Transport",
    title: "Maersk Spot",
    description:
      "With markets constantly changing, Maersk Spot is an effective way to prepare your business for any opportunity.",
    details:
      "A digital freight booking platform available 24/7 via web or mobile app, so you can book and modify shipments on the go.",
    features: [
      "Fixed prices and instant booking confirmation",
      "Guaranteed loading of your cargo",
      "Rollable option for non time-sensitive cargo",
      "Combine ocean and inland transport in one booking",
    ],
  },
  {
    id: 2,
    type: "Transport",
    title: "Intermodal Transport Prices",
    description:
      "Find online rates for Inland Transportation of Full Container Loads.",
    details:
      "Instant pricing for inland transportation with flexible booking options.",
    features: [
      "Competitive pricing for inland transport",
      "Easy online booking",
      "Customizable shipping routes",
      "Fast and secure transit",
    ],
  },
  {
    id: 3,
    type: "Clear & Protect",
    title: "Maersk Customs Services",
    description:
      "Simplify customs clearance with import, export, and in-transit declarations.",
    details: "Expert support for smooth and compliant customs processing.",
    features: [
      "Seamless customs clearance",
      "Expert guidance on regulations",
      "Quick and hassle-free processing",
      "Import and export support",
    ],
  },
  {
    id: 4,
    type: "Logistics",
    title: "Warehouse Solutions",
    description:
      "Integrated warehousing and distribution services for optimized supply chain management.",
    details:
      "End-to-end storage and logistics solutions with real-time inventory tracking.",
    features: [
      "Secure storage facilities",
      "Efficient inventory management",
      "Flexible distribution options",
      "Scalable solutions for all business sizes",
    ],
  },
  {
    id: 5,
    type: "Security",
    title: "Cargo Insurance",
    description:
      "Comprehensive insurance solutions to protect your shipments against unforeseen events.",
    details: "Risk coverage for damages, losses, and delays during transit.",
    features: [
      "Flexible coverage options",
      "Fast claims processing",
      "Protection against damage and theft",
      "24/7 customer support",
    ],
  },
  {
    id: 6,
    type: "Technology",
    title: "Supply Chain Visibility",
    description:
      "Real-time tracking and analytics for enhanced supply chain transparency.",
    details:
      "Advanced tracking tools to monitor shipments and optimize logistics operations.",
    features: [
      "Live shipment tracking",
      "Predictive analytics for logistics",
      "Automated alerts and notifications",
      "Comprehensive reporting tools",
    ],
  },
];

export default function ServicesComponent() {
  const [selectedService, setSelectedService] = useState(null);
  const [filters, setFilters] = useState({
    Transport: true,
    Store: true,
    "Clear & Protect": true,
    Logistics: true,
    Security: true,
    Technology: true,
  });

  const toggleFilter = (filter) => {
    setFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  const filteredServices = services.filter((service) => filters[service.type]);

  return (
    <div className="p-4 flex gap-4  m-auto  max-w-6xl ">
      {/* Sidebar Filter */}
      <div className="w-1/4 border p-4 rounded-lg shadow-sm hidden lg:block">
        <h3 className="text-lg font-semibold mb-2">Service Type</h3>
        <p className="text-sm text-gray-500 mb-2">
          Choose your preferred type of service
        </p>
        {Object.keys(filters).map((filter) => (
          <div key={filter} className="flex items-center space-x-3 mb-2">
            <Checkbox
              checked={filters[filter]}
              onCheckedChange={() => toggleFilter(filter)}
            />
            <span className="text-sm font-medium">{filter}</span>
            {filter === "Transport" && (
              <Badge className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-md">
                New
              </Badge>
            )}
          </div>
        ))}
      </div>

      {/* Services List */}
      <div className="w-full lg:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredServices.map((service) => (
            <div key={service.id} className="border p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.description}</p>
              <div className="mt-2 flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setSelectedService(service)}
                >
                  View Details
                </Button>
                <Link href="/login" className="text-blue-600">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Dialog */}
      {selectedService && (
        <Dialog
          open={!!selectedService}
          onOpenChange={() => setSelectedService(null)}
        >
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{selectedService.title}</DialogTitle>
              <DialogDescription>{selectedService.details}</DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-2">
              {selectedService.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-blue-600">✔</span>
                  <p className="text-sm">{feature}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-600">
              If you're exporting from, or importing to, the Americas and
              looking for tariff inquiry information, please visit our
              <Link href="#" className="text-blue-600">
                {" "}
                tariff information page.
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
