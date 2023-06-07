import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue.length >= 3) {
      alert("Button clicked!");
    }
  };

  const buttonClass =
    inputValue.length >= 3 ? "glowing-button" : "light-button";

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button
        className={buttonClass}
        onClick={handleClick}
        disabled={inputValue.length < 3}
      >
        Submit
      </button>
    </div>
  );

  //   return (
  //     <div className="App">
  //       <h1>Hello CodeSandbox</h1>
  //       <h2>Start editing to see some magic happen!</h2>
  //     </div>
  //   );
}
