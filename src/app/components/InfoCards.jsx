"use client";
import { FaLifeRing, FaUserPlus, FaAward } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const cards = [
  {
    icon: <FaLifeRing className="text-2xl text-gray-700" />,
    title: "How to get started",
    description:
      "Whether you need to find prices, place a booking, submit documents, or track your cargo, our step-by-step guides will help you find your way around.",
    buttonText: "Learn more",
  },
  {
    icon: <FaUserPlus className="text-2xl text-gray-700" />,
    title: "Ready to book?",
    description:
      "Sign up to book, manage and pay your shipments online, and access a suite of products and services designed to simplify your supply chain.",
    buttonText: "Register now",
  },
  {
    icon: <FaAward className="text-2xl text-gray-700" />,
    title: "Become a logistics expert",
    description:
      "Discover insights, introductory videos, explanatory articles and gain the confidence you need to optimise your supply chain.",
    buttonText: "Learn more",
  },
];

export default function InfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {cards.map((card, index) => (
        <motion.div
          className=""
          initial={{ opacity: 0, y: 50 }}
          key={index}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="border rounded-lg p-6 shadow-md flex flex-col items-start">
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <Button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700">
              {card.buttonText}
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
