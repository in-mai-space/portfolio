"use client";

import React from "react";
import About from "@/components/about";
import Project from "@/components/project";
import Divider from "@/components/ui/divider";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import { ScrollProvider, useScroll } from "@/context/scroll";

const sections = [
  { component: About, name: "about" },
  { component: Project, name: "project" },
  { component: Experience, name: "experience" },
];

const HomePageContent = () => {
  const { aboutRef, projectRef, experienceRef } = useScroll();

  return (
    <div
      className="min-h-screen dark:bg-black bg-white bg-cover bg-center bg-no-repeat select-none px-20"
      style={{
        backgroundImage: 'url("/background.svg")',
      }}
    >
      <div>
        {sections.map(({ component: Section, name }, index) => (
          <div
            key={index}
            ref={
              name === "about"
                ? aboutRef
                : name === "project"
                  ? projectRef
                  : name === "experience"
                    ? experienceRef
                    : undefined
            }
          >
            <div className="pt-[5%] pb-[10%]">
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

const HomePage = () => {
  return (
    <ScrollProvider>
      <HomePageContent />
    </ScrollProvider>
  );
};

export default HomePage;
