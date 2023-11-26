import React from "react";
import Buggymania from "./component/Buggymania";
import About from "./component/About";

const App = () => {
  const textForBuggymania =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, lorem ipsum dolor sit amet, consectetur adipiscing elit. ";

  return (
    <div>
      <br></br>
      {/* Display Buggymania component */}
      <Buggymania text={textForBuggymania} />

      {/* Display About component */}
      <div style={{ marginTop: "20px" }}>
        <About />
      </div>
    </div>
  );
};

export default App;
