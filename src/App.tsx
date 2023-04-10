import React from "react";
import "./App.css";
import { Navigation } from "./components/navigation";
import { BodyHero } from "./components/body-hero";
function App() {
  return (
    <div className='App'>
      <Navigation />
      <BodyHero />
    </div>
  );
}

export default App;
