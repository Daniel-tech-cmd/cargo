import Edit from "@/app/components/EditUser";
import Navbar from "@/app/components/Navbar";
import { Suspense } from "react";

const page = async () => {
  return (
    <>
      <Navbar bgColor="bg-white" />
      <Suspense>
        <Edit />
      </Suspense>
    </>
  );
};

export default page;
