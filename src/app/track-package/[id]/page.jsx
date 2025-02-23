import Address from "@/app/components/Address";
import FooterNav from "@/app/components/FooterNav";
import MapEmbed from "@/app/components/Map";
import Navbar from "@/app/components/Navbar";
import { notFound } from "next/navigation";
async function getdatabyId(id) {
  const res = await fetch(`${process.env.URL}/api/gift/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();

  return data;
}
const page = async ({ params }) => {
  const id = await params.id;
  const data = getdatabyId(id);
  const [dat] = await Promise.all([data]);
  return (
    <>
      <Navbar bgColor="bg-white" />
      <div style={{ background: "#fff", marginTop: "75px" }}>
        <MapEmbed location={dat?.currentLocation} />
        <Address data={dat} />
        <FooterNav />
      </div>
    </>
  );
};

export default page;
