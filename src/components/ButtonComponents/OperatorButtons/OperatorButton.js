import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <button className = "operatorButtons">{props.value.char}</button>
    </>
  );
};
export default OperatorButton