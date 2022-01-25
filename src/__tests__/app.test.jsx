import React from "react";
import { render, screen, waitForElement } from "@testing-library/react";

import { App } from "../modules/app";
import { EditorAction } from '../__mocks__/editor-action';

describe("App", () => {
  beforeEach(() => {
    render(<App enablePersist={false} />);
  });

  it("should be render correctly", () => {
    expect(screen.getByTestId("app")).toBeInTheDocument();
  });

  it("should contain a toolbar and a canvas", () => {
    ["toolbar", "canvas"].forEach((component) => {
      expect(screen.getByTestId(component)).toBeInTheDocument();
    });
  });

  it("should add a box element when clicking in toolbar button", () => {
    const box = EditorAction.addBox(); 

    expect(box).toBeInTheDocument();
  });

  it("should add more than one box", () => {
    const numberOfBoxes = 3;

    for(let i = 0; i < numberOfBoxes; i++) EditorAction.addBox();
    const boxes = EditorAction.getAllBoxes();

    expect(boxes).toHaveLength(numberOfBoxes);
  });

  it("should select a box element when it is clicked", () => {
    const box = EditorAction.addBox();

    EditorAction.clickBox(box);

    expect(box.className).toContain("selected");
  });

  it("should unselect a box prevously selected", () => {
    const box = EditorAction.addBox();
    EditorAction.clickBox(box);

    EditorAction.clickBox(box);

    expect(box.className).not.toContain("selected");
  });

  it("should remove a selected box", () => {
    const box = EditorAction.addBox();
    EditorAction.clickBox(box);

    const boxes = EditorAction.removeSelectedBoxes();

    expect(boxes).toHaveLength(0);
  });

  it("should change color a selected box", async () => {
    const newColorHex = "#ff0000";
    const newColorRGB = "rgb(255, 0, 0)";

    const box = EditorAction.addBox();
    EditorAction.clickBox(box);
    EditorAction.changeColor(newColorHex);

    await waitForElement(() => {
      const [box] = EditorAction.getAllBoxes();
      return box.style.backgroundColor === newColorRGB;
    });
  });

  it("should redo / undo actions", () => {
    EditorAction.addBox();
    EditorAction.addBox();

    const initialBoxes = EditorAction.getAllBoxes();
    expect(initialBoxes).toHaveLength(2);

    EditorAction.undo();

    const boxesAlterUndo = EditorAction.getAllBoxes();
    expect(boxesAlterUndo).toHaveLength(1);

    EditorAction.redo();

    const boxesAlterRedo = EditorAction.getAllBoxes();
    expect(boxesAlterRedo).toHaveLength(2);
  })
});


