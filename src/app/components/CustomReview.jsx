import Image from "next/image";

export default function CustomsClearance() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800">
            Customs Clearance Services
          </h2>
          <p className="mt-4 text-gray-600">
            Every importer and exporter needs to have customs clearance. Maersk
            can help expedite this process at both origin and destination. Our
            core services include:
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li>Import Declarations</li>
            <li>
              Export Declarations - Includes ECTN Certificate that is required
              for imports into certain African countries.
            </li>
            <li>In-Transit Declarations</li>
          </ul>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Learn more
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/export-declarations-illustration_720x405_v2.svg"
            alt="Customs Clearance"
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800">
            Customs Clearance Services
          </h2>
          <p className="mt-4 text-gray-600">
            Every importer and exporter needs to have customs clearance. Maersk
            can help expedite this process at both origin and destination. Our
            core services include:
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li>Import Declarations</li>
            <li>
              Export Declarations - Includes ECTN Certificate that is required
              for imports into certain African countries.
            </li>
            <li>In-Transit Declarations</li>
          </ul>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Learn more
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/customs-after-ocean-booking_720x405.avif"
            alt="Customs Clearance"
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800">
            Manage your customs clearances online
          </h2>
          <p className="mt-4 text-gray-600">
            MyCustoms provides you a convenient way to manage and track customs
            booking online.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li>Advanced search and filter options</li>
            <li>Upload documents instantly</li>
            <li>Book customs products</li>
            <li>Track clearance status</li>
            <li>24/7 access</li>
          </ul>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Explore MyCustoms
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/web-solutions_720x405.avif"
            alt="Manage Customs Clearances"
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/map_720x405.avif"
            alt="Manage Customs Clearances"
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 " style={{ padding: "0 10px" }}>
          <h2 className="text-3xl font-semibold text-gray-800">
            Local information
          </h2>
          <p className="mt-4 text-gray-600">
            You can also add our customs services directly to your Maersk
            container booking. Our local customs experts know the ins and outs
            of every customs regulation. You can find the local information
            below.
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Explore MyCustoms
          </button>
        </div>
      </section>
    </>
  );
}
