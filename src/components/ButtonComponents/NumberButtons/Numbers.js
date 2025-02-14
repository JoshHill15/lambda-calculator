import React, {useState} from "react";
import { numbers } from "../../../data"
import NumbersButton from "./NumberButton"

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [n, setN] = useState(numbers)

  return (
    <div className = "num">
      {n.map((value, index) => (<NumbersButton setDisplay = {props.setDisplayState }key = {index} value = {value}/>))}
    </div>
  );
};

export default Numbers

