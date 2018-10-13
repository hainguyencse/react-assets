import React from 'react';
import PropTypes from 'prop-types';
import SimpleMDE from 'simplemde';

class MarkdownEditor extends React.Component {
  componentDidMount() {
    const {
      autoFocus, placeholder, onChange, onBlur, value
    } = this.props;

    let simplemde;
    if (SimpleMDE && !simplemde) {
      simplemde = new SimpleMDE({
        element: this.textArea,
        toolbar: [
          'bold', 'italic', '|',
          'heading-1', 'heading-2', 'heading-3', '|',
          'unordered-list', 'ordered-list', '|',
          'link', 'image', '|',
          'preview',
        ],
        spellChecker: false,
        autofocus: autoFocus,
        placeholder,
        status: false,
        initialValue: value,
      });

      if (simplemde.codemirror) {
        simplemde.codemirror.on('change', () => {
          onChange(simplemde.value());
        });

        simplemde.codemirror.on('blur', (e) => {
          onBlur();
        });
      }
    }
  }

  render() {
    const {
      label, rows, required, disabled, touched, error
    } = this.props;

    return (
      <div>
        {label && <label>{label}</label>}
        <textarea
          rows={rows}
          required={required}
          ref={(ref) => { this.textArea = ref; }}
          disabled={disabled}
        />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }
}

MarkdownEditor.propTypes = {
  /**
   * Maximum rows displayed by the editor
   */
  rows: PropTypes.number,
  /**
   * Label of the editor
   */
  label: PropTypes.string,
  /**
   * Placeholder to display
   */
  placeholder: PropTypes.string,
  /**
   * Whether to disable the editor
   */
  disabled: PropTypes.bool,
  /**
   * Whether to autofocus the editor
   */
  autoFocus: PropTypes.bool,
  /**
   * Whether to mark the underlying textarea as required
   */
  required: PropTypes.string,
  /**
   * onChange event listener
   */
  onChange: PropTypes.func,
  /**
   * onBlur event listener
   */
  onBlur: PropTypes.func,
  /**
   * The initialValue of the editor
   */
  value: PropTypes.string,
  /**
   * Whether the editor has been touched
   */
  touched: PropTypes.bool,
  /**
   * Whether the editor has error
   */
  error: PropTypes.string,
};

MarkdownEditor.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  touched: false,
};

export default MarkdownEditor;
