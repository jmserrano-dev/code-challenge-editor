import React from "react";

import "./toolbar.css";

const Toolbar = ({ children, ...props }) => {
  return (
    <nav {...props} className="toolbar">
      {children}
    </nav>
  );
};

const ToolbarGroup = ({ justify = "start", children }) => {
  return <div className={`layout__group ${justify}`}>{children}</div>;
};

export { Toolbar, ToolbarGroup };
