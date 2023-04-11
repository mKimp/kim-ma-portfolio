import React from "react";
import "./App.css";
import { Navigation } from "./components/navigation";
import { BodyHero } from "./components/body-hero";
import { BodyIntroduction } from "./components/body-introduction";
import { Projects } from "./components/project";
function App() {
  return (
    <div className='App'>
      <Navigation />
      <BodyHero />
      <BodyIntroduction />
      <Projects />
    </div>
  );
}

export default App;
