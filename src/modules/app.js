import React from "react";

import { store } from "../stores";
import { Editor } from "./editor/editor";
import { StoreProvider } from "../hooks";

import "./app.css";

const App = () => {
  return (
    <div data-testid="app" className="app">
      <StoreProvider store={store}>
        <Editor />
      </StoreProvider>
    </div>
  );
};

export { App };
