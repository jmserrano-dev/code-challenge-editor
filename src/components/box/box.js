import React from "react";

import "./box.css";

const Box = (props) => {
  return (
    <div
      data-testid="box"
      id={props.id}
      className={["box", props.isSelected ? "box--selected" : ""].join(" ")}
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.color,
      }}
      onClick={props.onClick}
    >
      Box
    </div>
  );
};

export { Box };
