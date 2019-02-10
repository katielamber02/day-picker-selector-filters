import React, { Fragment } from "react";
import Backdrop from "./Backdrop";

import Button from "./Button";

const modal = props => {
  //console.log("props", props);
  return (
    <Fragment>
      <div
        className="modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        <Button clicked={props.modalClosed} btnType={props.btnType}>
          CANCEL MODAL
        </Button>
        {props.children}
      </div>
      <Backdrop show={props.show} clicked={props.modalClosed} />
    </Fragment>
  );
};
export default modal;
