import LogisticsServices from "../components/Logisticsservices";
import Navbar from "../components/Navbar";

const Page = () => {
  return (
    <>
      <Navbar />
      <LogisticsServices />
      <div className="w-full flex flex-col items-center text-center py-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
          Simplify & connect your supply chain
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Regardless of your industry, your commodity, or your key markets,
          Maersk offers global and local logistics solutions that enable small
          and large businesses to grow.
        </p>

        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-light text-gray-900">
            Transport
          </h3>
          <p className="text-gray-600 mt-2 max-w-lg">
            Move your goods anywhere around the world at your desired pace and
            smooth your clearance process to keep your goods moving.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center text-center py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 w-full max-w-6xl">
          {[
            {
              title: "Ocean Transport",
              description:
                "As one of the world's largest container shipping companies, we move 12 million containers every year and deliver to every corner of the globe.",
              image: "/ocean-transport.avif",
              buttonText: "Find a price",
            },
            {
              title: "Inland Transport",
              description:
                "Optimise your global supply chain with Maersk Inland Services, offering FCL, LTL, and FTL solutions to ensure seamless and efficient operations.",
              image: "/landside-transport.avif",
              buttonText: "Book now",
            },
            {
              title: "Less-than-Container Load (LCL)",
              description:
                "Be it shipping small boxes or pallets, our LCL services ensure on-time shipment and delivery.",
              image: "/lcl.avif",
              buttonText: "Book now",
            },
            {
              title: "Air Freight",
              description:
                "Reduce the cost of transporting your urgent or time-critical cargo with our Global Air Freight solutions.",
              image: "/air-freight.avif",
              buttonText: "Find a price",
            },
            {
              title: "Maersk Ground Freight",
              description:
                "Get seamless and reliable non-containerised ground transportation with integrated trucking services.",
              image: "/ground-freight.avif",
              buttonText: "Contact us",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <div className="mt-4 flex space-x-2">
                  <button className="bg-blue-900 text-white py-2 px-4 rounded-md">
                    {service.buttonText}
                  </button>
                  <button className="border border-gray-400 text-gray-900 py-2 px-4 rounded-md">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col items-center text-center py-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-light text-gray-900">Store</h2>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Goods are stored or managed throughout the supply chain based on the
          customers’ needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 w-full max-w-6xl">
          {[
            {
              title: "Contract Logistics",
              description:
                "Strengthen your business with strategically located warehouses from Maersk.",
              image: "/contract-logistics.avif",
              buttonText: "Contact us",
            },
            {
              title: "Depot",
              description:
                "Maersk’s container depot services will help expedite your cargo import and export while adding more flexibility and speed to your supply chain.",
              image: "/depot.avif",
              buttonText: "Contact us",
            },
            {
              title: "Cold Storage",
              description:
                "Our strategically located state-of-the-art Cold Storage facilities around the globe offer a wide array of solutions and services.",
              image: "/cold-storage.avif",
              buttonText: "Contact us",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <div className="mt-4 flex space-x-2">
                  <button className="bg-blue-900 text-white py-2 px-4 rounded-md">
                    {service.buttonText}
                  </button>
                  <button className="border border-gray-400 text-gray-900 py-2 px-4 rounded-md">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center py-12 px-6 bg-white max-w-6xl m-auto">
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-light text-gray-900">
            Solving your logistics needs from A to Z
          </h2>
          <p className="text-gray-600 mt-4">
            Logistics doesn’t have to be complicated. With Maersk, all your
            needs are covered from end to end with one solution, one partner,
            and one seamless supply chain, allowing you to focus on what your
            business does best.
          </p>
          <p className="text-gray-600 mt-4">
            Get an all-in-one package to integrate everything from transport and
            warehousing to customs and supply chain management – or take
            advantage of our specialised expertise to meet the unique demands of
            your industry.
          </p>
          <button className="mt-6 bg-blue-900 text-white py-2 px-6 rounded-md">
            Solutions
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="/logistics-solutions.jpg"
            alt="Logistics Planning"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
