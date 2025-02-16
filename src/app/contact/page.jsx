import ContactUs from "../components/Contactus";
import FooterNav from "../components/FooterNav";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <>
      <Navbar bgColor="bg-white" />
      <ContactUs />
      <FooterNav />
    </>
  );
};

export default page;
