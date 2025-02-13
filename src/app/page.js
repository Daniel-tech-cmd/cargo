import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import NetworkFuture from "./components/NetworkFeature";
import InfoCards from "./components/InfoCards";
import LogisticsSolutions from "./components/LogisticsSolutions";
import ServiceFeatures from "./components/ServiceFeatures";
import LatestInsights from "./components/LatestInsights";
import AlertBanner from "./components/AlertBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <NetworkFuture />
      <InfoCards />
      <LogisticsSolutions />
      <ServiceFeatures />
      <LatestInsights />
      <AlertBanner />
    </>
  );
}
