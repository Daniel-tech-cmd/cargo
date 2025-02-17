import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Globalreach() {
  return (
    <section className="container mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center gap-8">
      {/* Text Content */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Local expertise, global reach
        </h2>
        <p className="text-lg text-gray-600">
          To ensure seamless movement, prerequisites like compliance and
          clearances must be managed efficiently. A trusted partner who
          understands the complexities of your
          <a href="#" className="text-blue-600 underline">
            supply chain
          </a>{" "}
          and local regulations can help in making the whole process easier.
        </p>
        <p className="text-lg text-gray-600">
          With Maersk Customs Services, you can simplify your imports and
          exports anywhere in the world. We provide visibility and efficiency, a
          smooth compliance process, and a global network of customs experts to
          help keep your goods moving round the clock.
        </p>
        <Button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
          Book now
        </Button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/local-global-customs-services_1024x576.avif"
          width={500}
          height={300}
          alt="Customer support representative"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
