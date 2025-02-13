import LogisticsHero from "../components/LogisticsHero";
import Navbar from "../components/Navbar";
import ServicesComponent from "../components/ServicesComponent";

const Page = () => {
  return (
    <>
      <Navbar bgColor="bg-white" />
      <LogisticsHero />
      <ServicesComponent />
    </>
  );
};

export default Page;
