import React from "react";
import { render, screen } from "@testing-library/react";

import { App } from "../modules/app";

describe("App", () => {
  it("should be render correctly", () => {
    render(<App />);

    expect(screen.getByTestId("app")).toBeInTheDocument();
  });

  it("should contain a toolbar and a canvas", () => {
    render(<App />);

    ["toolbar", "canvas"].forEach((component) => {
      expect(screen.getByTestId(component)).toBeInTheDocument();
    });
  });
});
