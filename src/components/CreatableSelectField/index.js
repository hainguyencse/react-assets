import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/lib/Creatable';

const PRIMARY = '#3c8dbc';
const FOCUS_COLOR = '#cfebfc';
const INPUT_BORDER = '#d2d6de';
const INPUT_TEXT_COLOR = '#555';

export const customSelectStyles = {
  control: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: 'white',
    borderRadius: 0,
    borderColor: isSelected ? PRIMARY : INPUT_BORDER
  }),
  option: (styles, { isFocused, isSelected }) => {
    const isFocusStyle = isFocused ? FOCUS_COLOR : 'white';
    return {
      ...styles,
      backgroundColor: isSelected ? PRIMARY : isFocusStyle,
      color: isSelected ? 'white' : INPUT_TEXT_COLOR
    };
  }
};

const createOption = label => ({
  label,
  value: label
});

class CreatableSelectField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    };
  }

  handleCreate = (inputValue) => {
    const { options } = this.state;
    const newOption = createOption(inputValue);
    this.setState({
      options: [...options, newOption]
    });
  };

  render() {
    const {
      name, validate, label, isDisabled, isLoading, onInputChange, isMulti, className, onChange, handleCreate
    } = this.props;
    const { options } = this.state;
    return (
      <Field
        name={name}
        validate={validate}
        render={({ field, form }) => {
          const { ...restField } = field;
          const { setFieldValue, values } = form;
          const { errors, touched } = form;

          return (
            <div className={className || 'form-horizontal form-group'}>
              {label ? <label>{label}</label> : null}
              <CreatableSelect
                {...restField}
                isClearable
                value={(values && values[name]) || null}
                isDisabled={isDisabled}
                isLoading={isLoading}
                options={options}
                isMulti={isMulti}
                onCreateOption={(inputValue) => {
                  this.handleCreate(inputValue);
                  setFieldValue(name, createOption(inputValue));
                  if (onChange) {
                    onChange(createOption(inputValue));
                  }
                }}
                onChange={(valueObj, actionObj) => {
                  setFieldValue(name, valueObj);
                  if (onChange) {
                    onChange(valueObj, actionObj);
                  }
                }}
                onInputChange={onInputChange}
                styles={customSelectStyles}
              />
              {errors[name] && touched[name] ? (
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

CreatableSelectField.propTypes = {
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isMulti: PropTypes.bool,
  onInputChange: PropTypes.func,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string
    })
  ),
  name: PropTypes.string.isRequired,
  validate: PropTypes.func
};

CreatableSelectField.defaultProps = {
  isMulti: false,
  label: '',
  options: [],
  onInputChange: () => {}
};

export default CreatableSelectField;
