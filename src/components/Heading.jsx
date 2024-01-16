import React from "react";
import Sun from "../assets/sun.svg";
const Heading = () => {
  return (
    <div className="container">
      <div>
        <h1 className="text-center py-5">Light & Dark Mode Practice</h1>
        <img src={Sun} alt="" />
      </div>
    </div>
  );
};

export default Heading;
