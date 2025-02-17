import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import Link from "next/link";

export default function CustomsService() {
  return (
    <section
      className="relative w-full h-[400px] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/maersk-customs-services_1920x600_v3.avif')",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10">
        {/* Text Content */}
        <div className="text-white md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Maersk Customs Services
          </h1>
          <p className="text-lg text-gray-200">
            Experience simplified global customs with local expertise.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/user/signup"
              className="bg-white text-black px-4 py-2 rounded-lg inline-block"
            >
              Book now
            </Link>
            <Link
              href={"/contact"}
              className="bg-gray-200 text-black px-4 py-2 rounded-lg inline-block"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Share Icon */}
      <div className="absolute top-6 right-6 text-white cursor-pointer">
        <Share2 size={24} />
      </div>
    </section>
  );
}
