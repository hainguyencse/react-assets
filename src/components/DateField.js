import React, { Component } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePicker from 'react-datepicker';

class DateField extends Component {
  render() {
    const { name, validate } = this.props;
    return (
      <Field
        name={name}
        validate={validate}
        render={({ field, form }) => {
          const { value, ...restField } = field;
          const { setFieldValue } = form;
          const { errors, touched } = form;

          const { isDefaultHeader } = this.props;
          let props = {
            ...this.props,
            selected: value || moment(),
            onChange: (date) => { setFieldValue(name, date); }
          };
          if (!isDefaultHeader) {
            props = {
              ...props, renderCustomHeader: ({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled
              }) => {}
            };
          }
          return (
            <div>
              <DatePicker
                {...props}
              />
              {errors[name] && touched[name]
                ? (
                  <div className="form-horizontal form-group has-error">
                    <span className="help-block">{errors[name]}</span>
                  </div>
                ) : null}
            </div>
          );
        }}
      />
    );
  }
}

DateField.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
};

DateField.defaultProps = {};

export default DateField;
