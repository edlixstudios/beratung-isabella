import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "$/components/header";
import { Footer } from "$/components/footer";
import { twMerge } from "tailwind-merge";
import { Dgsv } from "$/components/dgsv";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beratung by Isabella Heilig",
  description: "Supervision - Coaching - Organisationsberatung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={twMerge(inter.className, "min-h-screen flex flex-col")}>
        <h1 className={"hidden"}>Beratung Pforzheim Isabella Heilig</h1>
<Header />
        {children}
        <Dgsv />
        <Footer />
      </body>
    </html>
  );
}
