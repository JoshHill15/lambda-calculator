import React, {useState} from "react";
import {operators } from "../../../data"
import OperatorButton from "./OperatorButton"
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [o] = useState(operators)
  return (
    <div className = "opdiv">
      {o.map((value,index) => (<OperatorButton value = {value} key = {index}/>))}
    </div>
  );
};
export default Operators