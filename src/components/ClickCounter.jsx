import React from "react";

const ClickCounter = ({ count }) => {
  return (
    <div className="clickCounter">
      <h1>Clicks: {count}</h1>
    </div>
  );
};

export default ClickCounter;
