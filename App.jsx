import { useState } from "react";
import React from "react";

import "./App.css";

function App() {
//making state of our application
const [weight,setWeight]=useState(0);
const [height,setHeight]=useState(0);
const [bmi,setBmi]=useState('');
const [message,setMessage]=useState('');

// logic part
let calBmi=(e)=>{
  e.preventDefault();
  if(weight==0 || height==0)
  {
    alert("Please enter a Valid Weight and Height ");
  }
  else{
    let bmi=weight / ( height * height ) ;
    setBmi(bmi);

    if(bmi<25)
    {
      setMessage("You are underweight");
    }
    else if(bmi >= 25 && bmi<=30)
    {
      setMessage("You are a healthy weight");
    }

   else
   {
    setMessage("you are overweight");

   }
  }
}

// reload 

let reload=()=>{
  window.location.reload()
}

  return (
    <><div className="app">
          <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight (lbp)</label>
            <input
              type="text"
              placeholder="Enter Weigth Value:"
              value={weight}
              onChange={(e)=>{setWeight(e.target.value)}}
            />
          </div>
          <div>
            <label>Height (meter)</label>
            <input
              type="text"
              placeholder="Enter Height Value():"
              value={height}
              onChange={(event)=>{setHeight(event.target.value)}}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
      </div>
  
    </>
  );
}

export default App;
