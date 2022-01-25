import React from "react";

import { createStore } from "../stores";
import { Editor } from "./editor/editor";
import { StoreProvider } from "../hooks";

import "./app.css";

const App = ({ enablePersist = true }) => {
  const store = createStore(enablePersist);

  return (
    <div data-testid="app" className="app">
      <StoreProvider store={store}>
        <Editor />
      </StoreProvider>
    </div>
  );
};

export { App };
