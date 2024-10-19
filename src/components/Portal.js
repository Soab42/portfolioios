import React from "react";
import { createPortal } from "react-dom";
export default function Portal() {
  return createPortal(<div>portal</div>, document.getElementById("portal"));
}
