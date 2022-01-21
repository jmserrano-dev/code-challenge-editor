import React from "react";

import "./canvas.css";

const Canvas = ({ children, onUnSelectAll, ...props }) => {
  return (
    <div {...props} className="canva" onClick={onUnSelectAll}>
      {children}
    </div>
  );
};

export { Canvas };
