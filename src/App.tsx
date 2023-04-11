import React from "react";
import "./App.css";
import { Navigation } from "./components/navigation";
import { BodyHero } from "./components/body-hero";
import { BodyIntroduction } from "./components/body-introduction";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { MyProjects } from "./components/my-projects";
function App() {
  return (
    <div className='App'>
      <Navigation />
      <BodyHero />
      <BodyIntroduction />
      <Experience />
      <Projects />
      <MyProjects />
    </div>
  );
}

export default App;
