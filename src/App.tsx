import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TMCCard from "./components/TMCCard";
import { db } from "./firebase";
import { uid } from "uid";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <TMCCard />
        <Analytics />
      </div>
    </>
  );
}

export default App;
