import React from "react";
import { BrowserWindow } from "./components/BrowserWindow";
import { InterFace } from "./components/Face";
import { GradientBar } from "./components/GradientBar";

function App() {
  return (
    <div className="w-full h-screen grid items-center justify-center">
      <BrowserWindow>
        <GradientBar />
        <InterFace />
      </BrowserWindow>
    </div>
  );
}

export default App;
