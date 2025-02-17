import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Why() {
  return (
    <section className="container mx-auto px-6 md:px-12 py-12">
      {/* Why Choose Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Why choose Maersk Customs Services?
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Maersk Customs Services proactively manages your import and export
          activities to save you time and manage exceptions by:
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div>
          <Image
            src="/end-to-end-integration.svg"
            width={50}
            height={50}
            alt="Integration Icon"
            className="mx-auto"
          />
          <h3 className="text-xl font-semibold mt-4">
            Providing end-to-end integration
          </h3>
          <p className="text-gray-600 mt-2">
            Integrate your customs process with our{" "}
            <a href="#" className="text-blue-600 underline">
              Supply Chain Management (SCM) platform
            </a>{" "}
            for export data management and downstream import benefits.
          </p>
        </div>

        <div>
          <Image
            src="/global-consulting_pictogram.svg"
            width={50}
            height={50}
            alt="Consulting Icon"
            className="mx-auto"
          />
          <h3 className="text-xl font-semibold mt-4">
            Global Trade and Customs Consulting services
          </h3>
          <p className="text-gray-600 mt-2">
            Compliance experts and specialist trade consultants help you
            maneuver the complex world of tariff codes, taxes, duties, and
            international trade regulations to help decrease costs and increase
            predictability.
          </p>
        </div>

        <div>
          <Image
            src="/offers-more-compliance-control.svg"
            width={50}
            height={50}
            alt="Compliance Icon"
            className="mx-auto"
          />
          <h3 className="text-xl font-semibold mt-4">
            Offering more compliance control
          </h3>
          <p className="text-gray-600 mt-2">
            Dedicated compliance management teams to closely monitor your
            customs activity along with the latest changes in legislation.
          </p>
        </div>
      </div>
    </section>
  );
}
