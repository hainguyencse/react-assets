import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import Box from '../Box';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    const { fields } = this.props;

    this.input = '';
    this.selectedField = '';

    if (fields.length > 0) {
      this.selectedField = fields[0].id;
    }
  }

  handleFieldChange(fieldId) {
    this.selectedField = fieldId;
  }

  handleInputChange(event) {
    this.input = event.target.value;
  }

  handleSearchSubmit(event) {
    const { onSubmit } = this.props;
    onSubmit(this.selectedField, this.input);

    event.preventDefault();
  }

  render() {
    const { fields } = this.props;

    return (
      <form onSubmit={this.handleSearchSubmit.bind(this)}>
        <div className="row">
          <div className="col-sm-8">
            <Input placeholder="Search keyword…" onChange={this.handleInputChange.bind(this)}/>
          </div>
          <div className="col-sm-4">
            <Select options={fields} onChange={this.handleFieldChange.bind(this)} />
          </div>
        </div>
      </form>
    );
  }
}

SearchBox.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
  })),
  onSubmit: PropTypes.func,
};

SearchBox.defaultProps = {
  fields: [],
  onSubmit: () => {},
};

export default SearchBox;
