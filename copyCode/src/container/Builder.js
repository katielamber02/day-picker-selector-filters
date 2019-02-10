import React, { Component } from "react";
import Modal from "../components/UI/Modal";
import InsideModal from "../components/UI/InsideModal";
import { connect } from "react-redux";
import { fetchOrders, getOrders } from "../actions/action-index";
//import axios from "axios";

class Builder extends Component {
  state = {
    purchasing: false,
    text: "hello"
  };
  componentWillMount() {
    //this.props.fetchOrders();
    this.props.getOrders();
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  };
  puchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    });
  };
  purchaseContinueHandler = () => {
    alert("handler sucessed");
  };

  render() {
    const { orders } = this.props;
    //console.log("orders", orders);

    return (
      <div>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.puchaseCancelHandler}
          btnType="button"
        >
          <InsideModal
            text={this.state.text}
            cancelled={this.puchaseCancelHandler}
            sucessed={this.purchaseContinueHandler}
          />
        </Modal>
        <button onClick={this.purchaseHandler}>open modal</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    orders: state.main.orders
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: () => dispatch(fetchOrders()),
    getOrders: () => dispatch(getOrders())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Builder);
