import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TMCCard from "./components/TMCCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <TMCCard />
      </div>
    </>
  );
}

export default App;
