import React, { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setMode] = useState(false);

  function handleToggle() {
    setMode((prevMode) => !prevMode);
  }
  return (
    <div className="App">
      <Navbar mode={mode} handleToggle={handleToggle} />
      <Main mode={mode} />
    </div>
  );
}

export default App;
