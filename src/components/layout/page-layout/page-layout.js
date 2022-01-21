import React from "react";

import "./page-layout.css";

const PageLayout = ({ gap = "m", children }) => {
  return <div className={`page-layout ${gap}`}>{children}</div>;
};

export { PageLayout };
