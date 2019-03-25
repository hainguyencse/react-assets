import React from 'react';
import PropTypes from 'prop-types';

let SimpleMDE;
// mitigate SSR error with navigator
if (global.navigator) {
  // eslint-disable-next-line
  SimpleMDE = require('simplemde');
}

class MarkdownEditor extends React.Component {
  componentDidMount() {
    const {
      autoFocus, placeholder, value
    } = this.props;

    if (SimpleMDE && !this.simplemde) {
      this.simplemde = new SimpleMDE({
        element: this.textArea,
        toolbar: [
          'bold', 'italic', '|',
          'heading-1', 'heading-2', 'heading-3', '|',
          'unordered-list', 'ordered-list', '|',
          'link', 'image', '|',
          'preview', 'side-by-side', 'fullscreen',
        ],
        spellChecker: false,
        autofocus: autoFocus,
        placeholder,
        status: false,
        initialValue: value,
      });

      if (this.simplemde.codemirror) {
        this.simplemde.codemirror.on('change', this.handleOnChange);
        this.simplemde.codemirror.on('blur', this.handleOnBlur);
      }
    }
  }

  componentDidUpdate() {
    const { value } = this.props;
    // value can be undefined --> check that case
    // only update the value of the input according to the external value if it is not typed
    if (value && this.simplemde.codemirror && !this._typed) {
      this.simplemde.codemirror.getDoc().setValue(value);
    }
  }

  componentWillUnmount() {
    if (this.simplemde.codemirror) {
      this.simplemde.codemirror.off('change', this.handleOnChange);
      this.simplemde.codemirror.off('blur', this.handleOnBlur);
    }
  }

  handleOnChange = (e, meta) => {
    if (meta.origin !== 'setValue') {
      // a flag to indicate whether the input is typed
      if (!this._typed) this._typed = true;
      this.props.onChange(this.simplemde.value());
    }
  };

  handleOnBlur = () => {
    this.props.onBlur();
  };

  render() {
    const {
      label, required, disabled, touched, error
    } = this.props;

    return (
      <div className="form-group">
        {label && <label>{label}</label>}
        <textarea
          required={required}
          ref={(ref) => { this.textArea = ref; }}
          disabled={disabled}
        />
        {touched && error && (
          <div className="form-horizontal form-group has-error">
            <span className="help-block">{error}</span>
          </div>
        ) }
      </div>
    );
  }
}

MarkdownEditor.propTypes = {
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
