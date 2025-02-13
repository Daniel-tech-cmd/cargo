import Link from "next/link";

export default function FooterNav() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Plan & Book</h3>
          <ul className="space-y-1 text-gray-700">
            <li>
              <Link href="/prices" className="hover:underline">
                Prices
              </Link>
            </li>
            <li>
              <Link href="/book" className="hover:underline">
                Book
              </Link>
            </li>
            <li>
              <Link href="/tracking" className="hover:underline">
                Container tracking
              </Link>
            </li>
            <li>
              <Link href="/schedules" className="hover:underline">
                Vessel schedules
              </Link>
            </li>
          </ul>
          <hr className="my-3 border-gray-300" />
          <h3 className="font-semibold text-lg mb-2">Help</h3>
          <ul className="space-y-1 text-gray-700">
            <li>
              <Link href="/offices" className="hover:underline">
                Local offices & information
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:underline">
                Support
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Logistics Services</h3>
          <ul className="space-y-1 text-gray-700">
            <li>
              <Link href="/ocean-transport" className="hover:underline">
                Ocean Transport
              </Link>
            </li>
            <li>
              <Link href="/customs" className="hover:underline">
                Maersk Customs Services
              </Link>
            </li>
            <li>
              <Link href="/intermodal" className="hover:underline">
                Intermodal Transport
              </Link>
            </li>
            <li>
              <Link href="/lead-logistics" className="hover:underline">
                Lead Logistics
              </Link>
            </li>
            <li>
              <Link href="/warehousing" className="hover:underline">
                Warehousing
              </Link>
            </li>
            <li>
              <Link href="/air-freight" className="hover:underline">
                Air Freight
              </Link>
            </li>
            <li>
              <Link href="/ecommerce" className="hover:underline">
                E-Commerce Logistics
              </Link>
            </li>
            <li>
              <Link href="/lcl" className="hover:underline">
                Less-than-Container Load (LCL)
              </Link>
            </li>
            <li>
              <Link href="/cold-chain" className="hover:underline">
                Cold Chain Logistics
              </Link>
            </li>
            <li>
              <Link href="/project-logistics" className="hover:underline">
                Maersk Project Logistics
              </Link>
            </li>
            <li>
              <Link href="/depot" className="hover:underline">
                Depot
              </Link>
            </li>
            <li>
              <Link href="/cold-storage" className="hover:underline">
                Cold Storage
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Resources</h3>
          <ul className="space-y-1 text-gray-700">
            <li>
              <Link href="/news" className="hover:underline">
                News & advisories
              </Link>
            </li>
            <li>
              <Link href="/industry" className="hover:underline">
                Industry sectors
              </Link>
            </li>
            <li>
              <Link href="/insights" className="hover:underline">
                Insights
              </Link>
            </li>
            <li>
              <Link href="/logistics-explained" className="hover:underline">
                Logistics explained
              </Link>
            </li>
          </ul>
          <hr className="my-3 border-gray-300" />
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-700">
            <li>
              <Link href="/myfinance" className="hover:underline">
                MyFinance
              </Link>
            </li>
            <li>
              <Link href="/app" className="hover:underline">
                Maersk App
              </Link>
            </li>
            <li>
              <Link href="/data-integrations" className="hover:underline">
                Data Integrations
              </Link>
            </li>
            <li>
              <Link href="/captain-peter" className="hover:underline">
                Captain Peter
              </Link>
            </li>
            <li>
              <Link href="/emissions" className="hover:underline">
                Emissions Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold text-lg mb-2">About</h3>
          <ul className="space-y-1 text-gray-700">
            <li>
              <Link href="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About us
              </Link>
            </li>
            <li>
              <Link href="/investors" className="hover:underline">
                Investors
              </Link>
            </li>
            <li>
              <Link href="/procurement" className="hover:underline">
                Procurement
              </Link>
            </li>
            <li>
              <Link href="/container-sales" className="hover:underline">
                Container sales
              </Link>
            </li>
            <li>
              <Link href="/press" className="hover:underline">
                Press
              </Link>
            </li>
            <li>
              <Link href="/sustainability" className="hover:underline">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="/growth" className="hover:underline">
                Maersk Growth
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
