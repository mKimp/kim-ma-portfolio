import React from "react";
import "./App.css";
import { Navigation } from "./components/navigation";
import { BodyHero } from "./components/body-hero";
import { BodyIntroduction } from "./components/body-introduction";
import { Experience } from "./components/experience";
function App() {
  return (
    <div className='App'>
      <Navigation />
      <BodyHero />
      <BodyIntroduction />
      <Experience />
    </div>
  );
}

export default App;
