import React from "react";
const NumberButton = (props) => {

  return (
      <button onClick = {() => props.setDisplay(props.value)} className = "numbers">{props.value}</button>
  
  );
};

export default NumberButton