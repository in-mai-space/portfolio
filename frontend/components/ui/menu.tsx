"use client";

import { useScroll } from "@/context/scroll";
import Button from "./button";

const MenuBar = () => {
  const { scrollTo } = useScroll();

  return (
    <div className="flex flex-row items-center gap-5">
      <Button onPress={() => scrollTo("about")} text="about" />
      <Button onPress={() => scrollTo("project")} text="project" />
      <Button onPress={() => scrollTo("experience")} text="experience" />
    </div>
  );
};

export default MenuBar;
