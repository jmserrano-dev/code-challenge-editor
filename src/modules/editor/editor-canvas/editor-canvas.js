import React from "react";
import { observer } from "mobx-react";

import { useStore } from "../../../hooks";
import { Box } from "../../../components/box";
import { Canvas } from "../../../components/canvas";
import { Draggable } from "../../../components/draggable";
import { useEditorCanvas } from "./editor-canvas.service";

const EditorCanvas = observer(() => {
  const store = useStore();
  const { boxes, onSelect, onUnSelectAll } = useEditorCanvas(store);

  return (
    <Canvas data-testid="canvas" onUnSelectAll={onUnSelectAll}>
      {boxes.map((box) => (
        <Draggable
          key={`${box.id}${box.color}`}
          left={box.left}
          top={box.top}
          width={box.width}
          height={box.height}
          isSelected={box.isSelected}
          onMove={(top, left) => box.move(top, left)}
        >
          {({ isDragging }) => (
            <Box
              id={box.id}
              color={box.color}
              width={box.width}
              height={box.height}
              onClick={(event) => onSelect(event, isDragging, box)}
            />
          )}
        </Draggable>
      ))}
    </Canvas>
  );
});

export { EditorCanvas };
