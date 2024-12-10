"use client";

import React, { useEffect } from "react";
import About from "@/components/about";
import Project from "@/components/project";
import Divider from "@/components/ui/divider";
import Experience from "@/components/experience";
import Footer from "@/components/footer";

const sections = [
  { component: About },
  { component: Project },
  { component: Experience },
];

const HomePage = () => {
  return (
    <div
      className="min-h-screen dark:bg-black bg-white bg-cover bg-center bg-no-repeat select-none px-20"
      style={{
        backgroundImage: 'url("/background.svg")',
      }}
    >
      <div>
        {sections.map(({ component: Section }, index) => (
          <div key={index}>
            <div className="pt-[6%] pb-[12%]">
              <Section />
            </div>
            <Divider />
          </div>
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
