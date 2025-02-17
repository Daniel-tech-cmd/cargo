import CustomsClearance from "../components/CustomReview";
import CustomsService from "../components/CustomsService(";
import Globalreach from "../components/Globalreach";
import Navbar from "../components/Navbar";
import Why from "../components/Why";

const page = () => {
  return (
    <>
      <Navbar />
      <CustomsService />
      <Globalreach />
      <Why />
      <CustomsClearance />
    </>
  );
};

export default page;
