import AdminComp from "@/app/components/Admin";
import { notFound } from "next/navigation";
import Navbar from "../components/Navbar";

async function getdataby() {
  const res = await fetch(`${process.env.URL}/api/gift/`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();

  return data;
}

const page = async () => {
  const data = getdataby();
  const [dat] = await Promise.all([data]);

  return (
    <>
      <Navbar bgColor="bg-white" />
      <AdminComp data={dat} />
    </>
  );
};

export default page;
