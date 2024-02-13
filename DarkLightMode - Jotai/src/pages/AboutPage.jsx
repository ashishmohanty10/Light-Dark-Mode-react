import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import { useAtom } from "jotai";
import { darkModeAtom } from "../components/ThemeToggle";

const AboutPage = () => {
  const [darkMode] = useAtom(darkModeAtom);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-slate-800 h-screen w-full ">
        <div className="flex items-center gap-5">
          <h1 className="dark:text-slate-200">About Page</h1>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
