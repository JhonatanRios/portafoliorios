import React from "react";

export default ({ open, ...props }) => (
  <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
    <p>Mas Información...</p>
  </div>
);