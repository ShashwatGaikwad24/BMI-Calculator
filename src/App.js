import { useState } from "react";

import "./App.css";

const App = () => {
  const [mass, setMass] = useState();
  const [height, setHeight] = useState();
  const [result, setResult] = useState();

  if (!result) {
    return (
      <div className="App">
        <h1>BMI Calculator</h1>
        <input
          placeholder="Enter Body Mass (kg.)"
          onChange={(e) => {
            setMass(e.target.value);
          }}
        />
        <input
          placeholder="Enter Height (meter)"
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            if (mass && height) {
              setResult((mass / (height * height)).toFixed(2));
            }
          }}
        >
          Calculate
        </button>
      </div>
    );
  } else {
    const category =
      result > 30
        ? "Obese"
        : result > 25
        ? "Overweight"
        : result > 18.5
        ? "Healthy Weight"
        : "Underweight";
    return (
      <div className="App">
        <h1>Body mass Index (BMI): {result} kg/m2</h1>
        <h2>Category: {category}</h2>
        <button
          onClick={(e) => {
            setResult();
          }}
        >
          Back
        </button>
      </div>
    );
  }
};

export default App;
