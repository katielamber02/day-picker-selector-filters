import { connect } from "react-redux";
import { setDate, reset } from "../../actions/action-index";

import React, { Component } from "react";
import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

class Calendar extends Component {
  static defaultProps = {
    numberOfMonths: 2
  };

  handleDayClick = day => {
    const { setDate, date } = this.props;
    const range = DateUtils.addDayToRange(day, date);
    setDate(range);
    //const range = DateUtils.addDayToRange(day, this.state);
    //this.setState(range);
  };
  handleResetClick = () => {
    this.props.reset();
  };
  render() {
    const { from, to } = this.props.date;
    //const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="RangeExample">
        <p>
          {!from && !to && "Please select the first day."}
          {from && !to && "Please select the last day."}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{" "}
          {from && to && (
            <button className="danger" onClick={this.handleResetClick}>
              Reset
            </button>
          )}
        </p>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
        <Helmet>
          <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color:#c4f381 !important;
    color:#83c02e;
    outline: none;
    border: none;

  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
        </Helmet>
      </div>
    );
  }
}
export default connect(
  state => ({ date: state.dateRange }),
  { setDate, reset }
)(Calendar);
//export default Calendar;
