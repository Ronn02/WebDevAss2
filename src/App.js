import React from "react";
import Navbar from "./components/Navbar";
import Content1 from "./components/Content1";
import About from "./components/About";
import Artworks from "./components/Artworks";

function App() {
  return (
    <div className='font-maitree'>
      <Navbar />

      <section id="content1">
        <Content1 />
      </section>

      <section id="about">
        <About />
      </section>
      
      <section id="artworks">
        <Artworks />
      </section>
    </div>
  );
}

export default App;
