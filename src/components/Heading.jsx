import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
const Heading = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div>
      <div className="container">
        <div>
          <h1>Ligh-Dark-Mode</h1>

          <button onClick={toggleTheme}>
            <FontAwesomeIcon icon={darkTheme ? faSun : faMoon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
