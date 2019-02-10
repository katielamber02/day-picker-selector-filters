import React, { Component } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import { connect } from "react-redux";
import { setDate } from "../../actions/action-index";

class DateRange extends Component {
  handleDayClick = day => {
    const { setDate, date } = this.props;

    setDate(DateUtils.addDayToRange(day, date));
  };

  render() {
    const { from, to } = this.props.date;
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`;
    return (
      <>
        <div className="date-range">
          <DayPicker
            ref="daypicker"
            selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
            onDayClick={this.handleDayClick}
          />
        </div>
        <h2 style={{ color: "#5c9210" }}>{selectedRange}</h2>
      </>
    );
  }
}

export default connect(
  state => ({ date: state.dateRange }),
  { setDate }
)(DateRange);
