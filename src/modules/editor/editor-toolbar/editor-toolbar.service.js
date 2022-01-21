import uuid from "uuid/v4";
import { useState } from "react";
import { debounce } from "throttle-debounce";

import { BoxModel } from "../../../stores/models";

const DEFAULT_COLOR = "#15D1C4";

const useColorPicker = (store) => {
  const [color, setColor] = useState(DEFAULT_COLOR);

  const onChangeColor = debounce(500, (newColor) => {
    setColor(newColor);
    if (store.countSelection > 0) {
      store.changeColor(newColor);
    }
  });

  return { color, onChangeColor };
};

const useToolbarActions = (store) => {
  const createNewBox = (color) => {
    return BoxModel.create({ id: uuid(), color, left: 50, top: 50 });
  };

  const onAddBox = (color) => {
    const box = createNewBox(color);
    store.addBox(box);
  };

  const onRemoveBoxes = () => {
    store.removeBoxes();
  };

  const onUndo = () => store.history.undo();

  const onRedo = () => store.history.redo();

  const actions = {
    remove: {
      disabled: store.countSelection === 0,
    },
    undo: {
      disabled: !store.history.canUndo,
    },
    redo: {
      disabled: !store.history.canRedo,
    },
  };

  return { actions, onUndo, onRedo, onAddBox, onRemoveBoxes };
};

export { useColorPicker, useToolbarActions };
