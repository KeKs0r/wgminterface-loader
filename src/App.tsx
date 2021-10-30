import React from "react";
import { Provider } from "./components/FaceContext";
import { BrowserWindow } from "./components/BrowserWindow";
import { InterFace } from "./components/Face";
import { Selector } from "./components/Selector";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Provider>
      <Layout>
        <Selector />
        <BrowserWindow>
          <div>
            <InterFace />
          </div>
        </BrowserWindow>
      </Layout>
    </Provider>
  );
}

export default App;
