import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import Select from '../Select';

class SearchBox extends React.Component {
  state = {
    input: this.props.inputValue || '',
    selectedField: this.props.selectedField
      || (this.props.fields.length > 0 && this.props.fields[0].id) || '',
  };

  componentDidUpdate(prevProps) {
    const { inputValue, selectedField, fields } = this.props;
    const { inputValue: prevInputValue, selectedField: prevSelectedField } = prevProps;

    if (inputValue !== prevInputValue || selectedField !== prevSelectedField) {
      // eslint-disable-next-line
      this.setState({ input: inputValue || '', selectedField: selectedField || (fields.length > 0 && fields[0].id) || '' });
    }
  }

  handleFieldChange(event) {
    this.setState({ selectedField: event.target.value });
  }

  handleInputChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSearchSubmit(event) {
    const { onSubmit } = this.props;
    const { input, selectedField } = this.state;
    onSubmit(selectedField, input);

    event.preventDefault();
  }

  render() {
    const { fields } = this.props;
    const { input, selectedField } = this.state;

    return (
      <form onSubmit={this.handleSearchSubmit.bind(this)}>
        <div className="row">
          <div className="col-sm-8">
            <Input placeholder="Search keyword…" value={input} onChange={this.handleInputChange.bind(this)} />
          </div>
          <div className="col-sm-4">
            <Select options={fields} value={selectedField} onChange={this.handleFieldChange.bind(this)} />
          </div>
        </div>
      </form>
    );
  }
}

SearchBox.propTypes = {
  inputValue: PropTypes.string,
  selectedField: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
  })),
  onSubmit: PropTypes.func,
};

SearchBox.defaultProps = {
  inputValue: undefined,
  selectedField: undefined,
  fields: [],
  onSubmit: () => {},
};

export default SearchBox;
