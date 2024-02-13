import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
{
  /* <IoIosSunny /> */
}
export const darkModeAtom = atomWithStorage("darkMode", false);

import React from "react";

const ThemeToggle = () => {
  const [appTheme, setAppTheme] = useAtom(darkModeAtom);

  const handleClick = () => {
    setAppTheme(!appTheme);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-green-400 py-2 px-4 border-1 border-slate-900 text-slate-900"
      >
        {appTheme ? <IoMoonSharp /> : <IoSunny />}
      </button>
    </div>
  );
};

export default ThemeToggle;
