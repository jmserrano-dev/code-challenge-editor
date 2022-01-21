import React from "react";

const Button = ({ label, ...props }) => {
  return <button {...props}>{label}</button>;
};

export { Button };
