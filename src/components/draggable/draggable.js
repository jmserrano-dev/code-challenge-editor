import React from "react";

import { useDraggable } from "./useDraggable";

import "./draggable.css";

const Draggable = (props) => {
  const { ref, isDragging } = useDraggable(props.onMove);

  return (
    <div
      ref={ref}
      data-top={props.top}
      data-left={props.left}
      className={[
        "draggable",
        props.isSelected ? "draggable--selected" : "",
        isDragging ? "draggable--dragging" : "",
      ].join(" ")}
      style={{
        width: props.width,
        height: props.height,
        transform: `translate(${props.left}px, ${props.top}px)`,
      }}
    >
      {props.children({ isDragging })}
    </div>
  );
};

export { Draggable };
