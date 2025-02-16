import { Geist, Geist_Mono } from "next/font/google";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import FooterNav from "./components/FooterNav";
import { AuthContextProvider } from "./contexts/AuthContext";
import ChatButton from "./components/Whatsappicon";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "700"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Jetspeed Cargo – Efficient Global Shipping Solutions",
  description:
    "Jetspeed Cargo offers fast, reliable cargo and logistics services, connecting businesses globally with secure and timely shipping solutions. Discover seamless delivery with our industry expertise.",
  openGraph: {
    title: "Jetspeed Cargo – Efficient Global Shipping Solutions",
    description:
      "Jetspeed Cargo offers fast, reliable cargo and logistics services, connecting businesses globally with secure and timely shipping solutions. Discover seamless delivery with our industry expertise.",

    images: [
      {
        url: "/download.png",
        width: 800,
        height: 600,
      },
      {
        url: "/download.png",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

async function getdatabyId() {
  const res = await fetch(`${process.env.URL}/api/whatsapp/`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return;
  }

  const data = await res.json();

  return data;
}

export default async function RootLayout({ children }) {
  const data = getdatabyId();
  const [dat] = await Promise.all([data]);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.className}  antialiased`}
      >
        <AuthContextProvider>
          <ChatButton number={dat[0].whatsappNumber} />
          {children}
          <FooterNav />
        </AuthContextProvider>
      </body>
    </html>
  );
}
