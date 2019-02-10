import React from "react";
import Button from "./Button";

export default function InsideModal(props) {
  return (
    <div>
      <h1>InsideModalComponent</h1>
      <p>{props.text}</p>
      <Button btnType="success" clicked={props.sucessed}>
        Continue
      </Button>
      <Button btnType="danger" clicked={props.cancelled}>
        Cancel
      </Button>
    </div>
  );
}
