export default function LogisticsHero() {
  const avatars = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 pt-20">
      <h2 className="text-3xl md:text-5xl font-semibold">
        Discover our transportation and logistics services
      </h2>
      <p className="mt-3 text-gray-600 text-lg">
        Receive an instant quote, look up rates, and book a shipment – all in
        one place.
      </p>

      <div className="flex items-center gap-4 mt-6">
        {/* Avatar Group */}
        <div className="flex">
          {avatars.map((name, index) => (
            <div
              key={index}
              className="-ml-2 first:ml-0 border-2 border-white rounded-full overflow-hidden"
            >
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
                alt={name}
                className="w-10 h-10"
              />
            </div>
          ))}

          {/* Extra Users Indicator */}
          <div className="-ml-2 border-2 border-white bg-gray-200 text-sm font-semibold text-gray-700 w-10 h-10 flex items-center justify-center rounded-full">
            +
          </div>
        </div>

        {/* Trust Message */}
        <p className="text-gray-500 italic">
          Trusted by more than{" "}
          <span className="font-semibold text-gray-700">
            100,000 customers worldwide.
          </span>
        </p>
      </div>
    </div>
  );
}
