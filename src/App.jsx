import React from "react";
import Heading from "./components/Heading";
import ThemeProvider from "./context/ThemeProvider";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Heading />
      </ThemeProvider>
    </div>
  );
};

export default App;
