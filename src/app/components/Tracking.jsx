"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function ShipmentTracking() {
  const [trackingType, setTrackingType] = useState("ocean");
  const [placeholder, setPlaceholder] = useState("B/L or container number");

  const handleTypeChange = (value) => {
    setTrackingType(value);
    switch (value) {
      case "ocean":
        setPlaceholder("B/L or container number");
        break;
      case "air":
        setPlaceholder("Airway bill number");
        break;
      case "lcl":
        setPlaceholder("B/L or booking number");
        break;
      case "parcel":
        setPlaceholder("Tracking number");
        break;
      default:
        setPlaceholder("");
    }
  };

  return (
    <div className="p-3 md:p-6 max-w-3xl mx-auto text-center pt-10 mt-16">
      <h2 className="text-2xl font-semibold">Shipment & Container Tracking</h2>
      <p className="text-gray-600 mt-2">
        Select your booking type and enter your tracking number to view full
        tracking details.
      </p>
      <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <Select value={trackingType} onValueChange={handleTypeChange}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ocean">Ocean Cargo</SelectItem>
            <SelectItem value="air">Air Cargo</SelectItem>
            <SelectItem value="lcl">LCL Cargo</SelectItem>
            <SelectItem value="parcel">Parcel</SelectItem>
          </SelectContent>
        </Select>
        <Input className="w-full sm:w-64" placeholder={placeholder} />
        <Button className="bg-blue-600 text-white">Track</Button>
      </div>

      {/* Questions and Answers Section */}
      <div className="mt-8 text-left">
        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="q1">
            <AccordionTrigger>
              What is a shipment or container number?
            </AccordionTrigger>
            <AccordionContent>
              A shipment or container number is a unique identifier used to
              track your cargo as it moves through the shipping process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>How can I track my shipment?</AccordionTrigger>
            <AccordionContent>
              Enter your tracking number in the field above and select the
              appropriate cargo type to view full tracking details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>
              What if my tracking number is not found?
            </AccordionTrigger>
            <AccordionContent>
              If your tracking number is not found, please verify it with your
              shipping provider or contact customer support for assistance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q4">
            <AccordionTrigger>
              How often is tracking information updated?
            </AccordionTrigger>
            <AccordionContent>
              Tracking information is updated regularly, but delays can occur
              due to various factors such as customs processing or carrier
              updates.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q5">
            <AccordionTrigger>
              Can I track multiple shipments at once?
            </AccordionTrigger>
            <AccordionContent>
              Yes, some tracking systems allow multiple entries. Please check
              with your provider to see if this feature is available.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
