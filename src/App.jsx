import React from "react";
import Navbar from "./components/common/Navbar";
import RebelCardSlider from "./components/common/RebelCardSlider";

function App() {

  return (
    <div className="max-w-[1280px] mx-auto">
      <Navbar />
      <RebelCardSlider/>
    </div>
  );
}

export default App;
