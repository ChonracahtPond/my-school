import { Mitr } from "next/font/google";
import React from "react";
import Footer from "./footer";
import ComponentsNavbar from "./navbar";
import Link from "next/link";
import Head from "next/head";
import VisiterCounter from "@/components/visiterCounter";
import BackToTopButton from "./BackTotop";


const mainFont = Mitr({ 
  weight: "400",
  subsets:['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

      <VisiterCounter />
      <header className="top-0 z-50 sticky">
        <ComponentsNavbar />
      </header>

      <Head>
        <title>PhanomwanCollege</title>
        <meta
          name="description"
          content="PHANOMWAN COLLEGE"
        />
        <link rel="icon" href="/panomwan.ico" />
      </Head>

      <div className="fixed bottom-[150px]  left-0 right-5 z-40 px-4 py-2 ">
        <Link href="https://www.facebook.com/PhanomwanCollege/">
          <p className="text-gray-400 underline"> <img
            className=" absolute inset-y-0 right-0 w-16"
            src="/img/messenger-Logo.png"
          /></p>
        </Link>
      </div>
      <main className={mainFont.className}>
        {children}
        <BackToTopButton />
      </main>
      <Footer />
    </>
  );
}




