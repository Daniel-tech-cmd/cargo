import { MdCampaign } from "react-icons/md";

export default function AlertBanner() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col items-start gap-4 py-6 px-4  rounded-lg shadow-sm bg-white">
      <MdCampaign className="w-10 h-10 text-gray-700" />
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-900">
          Red Sea / Gulf of Aden situation
        </h2>
        <p className="text-sm text-gray-600">
          Stay up to date with our latest information, vessel contingency, and
          updates here.
        </p>
      </div>
      <button className="px-4 py-2 bg-blue-900 text-white rounded-md text-sm hover:bg-blue-800 transition">
        Learn more
      </button>
    </div>
  );
}
