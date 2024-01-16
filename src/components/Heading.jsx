import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";
const Heading = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div>
      <div className="container">
        <div className="flex justify-center space-x-4 items-center py-5">
          <h1>Dark-Light-Mode</h1>
          <FaSun size={24} />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Heading;
