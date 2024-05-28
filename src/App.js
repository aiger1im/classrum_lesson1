import React, { useEffect, useState } from "react";
import ClickCounter from "./components/ClickCounter";
import ClickButtom from "./components/ClickButtom";
import ResetButtom from "./components/ResetButtom";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [clicked, setClick] = useState(false);
  const handleClick = () => {
    setCount(count + 1);
    setClick(true);
  };
  const handleReset = () => {
    setCount(0);
    setClick(false);
  };

  return (
    <div className="app">
      <ClickCounter count={count} />
      <ClickButtom onClick={handleClick} />
      <ResetButtom onReset={handleReset} />
    </div>
  );
};

export default App;
