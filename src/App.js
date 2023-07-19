import React from "react";
import Cards from "./Component/cards";
import "./App.css"; // Import the CSS file
function App() {
  return (
    <>
      <h1 className="flex justify-center text-6xl font-medium ml-5 tracking-tight text-white custom-h1">
        Gradient Effect Hover Card
      </h1>
      <Cards />
    </>
  );
}

export default App;
