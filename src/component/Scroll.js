import React from "react";
import "../css/scroll.css";
const Scroll = (props) => {
  return <div className="scrollable vh-75">{props.children}</div>;
};

export default Scroll;
