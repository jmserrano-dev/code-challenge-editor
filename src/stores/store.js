import { persist } from "mst-persist";
import { types } from "mobx-state-tree";
import { TimeTraveller } from "mst-middlewares";

import { BoxModel } from "./models/box-model";

const RootStore = types
  .model("RootStore", {
    boxes: types.array(BoxModel),
    history: types.optional(TimeTraveller, { targetPath: "../boxes" }),
  })
  .views((self) => ({
    get countSelection() {
      return self.boxes.filter((box) => box.isSelected).length;
    },
  }))
  .actions((self) => {
    return {
      addBox(box) {
        self.boxes.push(box);
      },
      removeBoxes() {
        self.boxes = self.boxes.filter((box) => !box.isSelected);
      },
      unselect() {
        self.boxes.forEach((box) => {
          box.unselect();
        });
      },
      changeColor(color) {
        self.boxes.forEach((box) => {
          if (box.isSelected) box.changeColor(color);
        });
      },
    };
  });

const createStore = (enablePersist = true) => {
  const store = RootStore.create();

  if (enablePersist) {
    persist("store", store, {
      storage: localStorage,
      jsonify: true,
    });
  }

  return store;
};

export { createStore };
