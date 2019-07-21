import React, { Component } from "react";
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment'


class DateSelector extends Component {

    constructor(props) {

        super(props);

        this.state = {
            startDate: null,
            endDate: null
        };

    }

    actionHandler(){

    }

    render(){
        return(
            <div className='row'>
                <DayPickerRangeController
                  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                  orientation={'vertical'}
                  numberOfMonths={2}
                  withPortal={true}
                  hideKeyboardShortcutsPanel={true}
                  isDayHighlighted={true}
                />
            </div>
        )
    }

};

export default DateSelector;
