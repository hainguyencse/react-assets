import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

export default class DatePickerField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <DatePicker
        {...this.props}
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

DatePickerField.propTypes = {
  
};

DatePickerField.defaultProps = {
  
};