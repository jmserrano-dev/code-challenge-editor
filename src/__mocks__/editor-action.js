import { screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

export class EditorAction {
  static addBox() {
    userEvent.click(screen.getByText("Add Box"));
    const boxes = screen.queryAllByTestId("box");

    return boxes[boxes.length - 1];
  }

  static removeSelectedBoxes() {
    userEvent.click(screen.getByText("Remove Box"));
    return screen.queryAllByTestId("box");
  }

  static clickBox(box) {
    userEvent.click(box);
  }

  static getAllBoxes() {
    return screen.queryAllByTestId("box");
  }

  static async changeColor(color) {
    const inputColor = screen.queryByTestId("input-color");
    fireEvent.input(inputColor, { target: { value: color } });
  }

  static undo() {
    userEvent.click(screen.getByText("Undo"));
  }

  static redo() {
    userEvent.click(screen.getByText("Redo"));
  }
}
