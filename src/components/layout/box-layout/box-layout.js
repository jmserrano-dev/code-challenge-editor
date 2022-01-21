import React from "react";

import "./box-layout.css";

const BoxLayout = ({ gap = "m", children, ...props }) => {
  return (
    <div {...props} className={`box-layout ${gap}`}>
      {children}
    </div>
  );
};

export { BoxLayout };
