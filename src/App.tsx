import React from "react";
import { Provider } from "./components/FaceContext";
import { BrowserWindow } from "./components/BrowserWindow";
import { InterFace } from "./components/Face";
import { Selector } from "./components/Selector";

function App() {
  return (
    <Provider>
      <div className="w-full h-screen grid items-center justify-center">
        <div>
          <Selector />
          <BrowserWindow>
            <div>
              <InterFace />
            </div>
          </BrowserWindow>
        </div>
      </div>
    </Provider>
  );
}

export default App;
