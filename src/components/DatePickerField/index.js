import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import moment from "moment";

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
    const { isDefaultHeader } = this.props;
    let props = {
      ...this.props,
      selected: this.state.startDate,
      onChange: this.handleChange
    };
    if (!isDefaultHeader) {
      props = {...props, renderCustomHeader: ({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled
      }) => {}};
    }
    return (
      <DatePicker
        {...props}
      />
    );
  }
}

DatePickerField.propTypes = {};

DatePickerField.defaultProps = {
  isDefaultHeader: true,
};
