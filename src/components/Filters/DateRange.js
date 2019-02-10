import React, { Component } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import { connect } from "react-redux";
import { changeDateRange, reset } from "../../action";

import Helmet from "react-helmet";

class DateRange extends Component {
  static defaultProps = {
    numberOfMonths: 2
  };

  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.props.dateRange);
    this.props.changeDateRange(range);
  };
  handleResetClick = () => {
    this.props.reset();
  };
  render() {
    const { from, to } = this.props.dateRange;
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
            <button className="link" onClick={this.handleResetClick}>
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
    background-color: #f0f8ff !important;
    color: #4a90e2;
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
  state => ({ dateRange: state.filters.dateRange }),
  { changeDateRange, reset }
)(DateRange);

// class DateRange extends Component{

// 	handleDayClick=day=>{
// 		const {changeDateRange,range}=this.props
// 		changeDateRange(DateUtils.addDayToRange(day,range))
// 	}
// 	render(){
// 		const {from,to}=this.props.range
// 		const selectedRange=from && to && `${from.toDateString()}-${to.toDateString()}`
// 		return (
// 		<div className="date-range">
// 		 <DayPicker
// 		    ref="daypicker"
// 			selectedDays={day=>DateUtils.isDayInRange(day,{from,to})}
// 			onDayClick={this.handleDayClick}
// 		 />
// 		 {selectedRange}
// 		 </div>
// 		)
// 	}
// }

// export default connect(state=>({
// 	range:state.filters.dateRange
// })

// ,{changeDateRange})(DateRange)

/*
class DateRange extends Component{
	state={
		from:null,
		to:null
	}
	handleDayClick=day=>{
		this.setState(
			DateUtils.addDayToRange(day,this.state)
		)
	}
	render(){
		const {from,to}=this.props
		const selectedRange=from && to && `${from.toDateString()}-${to.toDateString()}`
		return (
		<div className="date-range">
		 <DayPicker 
		    ref="daypicker"
			selectedDays={day=>DateUtils.isDayInRange(day,{from,to})}
			onDayClick={this.handleDayClick}
		 />
		 {selectedRange}
		 </div>
		)
	}
}

export default (DateRange
*/
