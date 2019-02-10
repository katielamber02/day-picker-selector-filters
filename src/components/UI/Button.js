import React from "react";

export default function button(props) {
  //console.log(props.btnType);
  //console.log(["button", [props.btnType]].join(":"));
  return (
    <button className={props.btnType} onClick={props.clicked}>
      {props.children}
    </button>
  );
}
