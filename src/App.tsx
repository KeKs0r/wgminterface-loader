import React from "react";
import { Provider } from "./components/FaceContext";
import { BrowserWindow } from "./components/BrowserWindow";
import { InterFace } from "./components/Face";
import { Selector } from "./components/Selector";
import { Layout } from "./components/Layout";
import { PrefetchImages } from "./components/PrefetchImages";

function App() {
  return (
    <Provider>
      <PrefetchImages />
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
