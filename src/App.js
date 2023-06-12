import React from "react";
import Navbar from "./components/Navbar";
import Content1 from "./components/Content1";
import About from "./components/About";
import Artworks from "./components/Artworks";

function App() {
  return (
    <div className='font-maitree'>
      <Navbar/>
      <Content1/>
      <About/>
      <Artworks/>
    </div>
  );
}

export default App;
