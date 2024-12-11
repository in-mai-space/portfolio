import { createContext, ReactNode, RefObject, useContext, useRef } from "react";

type ScrollContextType = {
  aboutRef: RefObject<HTMLDivElement | null>;
  projectRef: RefObject<HTMLDivElement | null>;
  experienceRef: RefObject<HTMLDivElement | null>;
  scrollTo: (section: "about" | "project" | "experience") => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const scrollTo = (section: "about" | "project" | "experience") => {
    const refs = {
      about: aboutRef,
      project: projectRef,
      experience: experienceRef,
    };
    const ref = refs[section];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider
      value={{
        aboutRef,
        projectRef,
        experienceRef,
        scrollTo,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
