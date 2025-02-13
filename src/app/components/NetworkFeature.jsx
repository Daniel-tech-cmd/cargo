import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NetworkFuture() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center gap-6 p-6 lg:p-12">
      {/* Text Content */}
      <div className="lg:w-1/2 w-full text-left">
        <h2 className="text-2xl lg:text-4xl font-semibold text-gray-900">
          The Network of the Future
        </h2>
        <p className="mt-4 text-gray-700 text-sm lg:text-base">
          Learn more about the Network of the Future, an innovative network
          powered by leaner loops with fewer port calls per service, an
          extensive shuttle network, and industry-leading hubs.
        </p>
        <p className="mt-4 text-gray-700 text-sm lg:text-base">
          With the new East West network, our ambition is to deliver a flexible
          and well- connected ocean network that aims to provide unmatched and
          industry-leading reliability above 90 percent (as measured by
          SeaIntel) when the new network is fully phased in.
        </p>
        <div className="mt-6 flex gap-4">
          <Button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Learn more
          </Button>
          <Button className="border border-gray-400 text-white hover:text-gray-900 px-6 py-2 rounded-md hover:bg-gray-200">
            Latest update
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <Image
          src="/network-of-the-future.avif"
          alt="Network Future"
          width={600}
          height={400}
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </section>
  );
}
