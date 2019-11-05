import React from "react";

const NumberButton = (props) => {
  return (
    <div>
      <button className = "numbers">{props.value}</button>
    </div>
  );
};

export default NumberButton