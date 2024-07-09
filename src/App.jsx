import { useState } from "react";
import Navbar from "./components/common/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-[1280px] mx-auto">
      <Navbar />
    </div>
  );
}

export default App;
