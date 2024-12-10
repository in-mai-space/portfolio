"use client";

import Navbar from "@/components/ui/navbar";
import About from "@/components/about";
import Project from "@/components/project";
import Divider from "@/components/ui/divider";
import Experience from "@/components/experience";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div
      className="select-none pt-20 px-20 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/background.svg")',
      }}
    >
      <Navbar />
      <About />
      <Divider />
      <Project />
      <Divider />
      <Experience />
      <Divider />
      <Footer />
    </div>
  );
}
