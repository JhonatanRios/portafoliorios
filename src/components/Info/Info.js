import React from "react";

export default ({ close }) => (
  <div className="info">
    <ul>
      <li onClick={close}>Cerrar</li>
    </ul>
  </div>
);