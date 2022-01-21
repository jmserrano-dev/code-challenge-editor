import { types } from "mobx-state-tree";

const BoxModel = types
  .model("Box", {
    id: types.identifier,
    width: 200,
    height: 100,
    color: "#FFF000",
    left: 200,
    top: 100,
    isSelected: false,
  })
  .views((self) => ({}))
  .actions((self) => ({
    toogleSelection() {
      self.isSelected = !self.isSelected;
    },
    changeColor(color) {
      self.color = color;
    },
    unselect() {
      self.isSelected = false;
    },
    move(top, left) {
      self.top = top;
      self.left = left;
    },
  }));

export { BoxModel };
