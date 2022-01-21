import React from "react";

import "./box.css";

const Box = (props) => {
  return (
    <div
      data-testId="box"
      id={props.id}
      className="box"
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
