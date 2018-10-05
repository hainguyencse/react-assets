import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tooltip extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayTooltip: false
    }
    this.hideTooltip = this.hideTooltip.bind(this)
    this.showTooltip = this.showTooltip.bind(this)
  }
  
  hideTooltip () {
    this.setState({displayTooltip: false})
    
  }
  showTooltip () {
    this.setState({displayTooltip: true})
  }

  render() {
    let message = this.props.message;
    let position = this.props.position;
    let width = this.props.width;

    return (
      <div className='tooltip-hover'
          onMouseLeave={this.hideTooltip}
          style={{ position: 'relative' }}
        >
        
        <div className={`tooltip fade ${position} in`} 
          role="tooltip" 
          style={{ position: 'absolute', bottom: '100%', left: '0', width: width + 'px', marginLeft: '-' + width/4 + 'px' }}
        >
          <div className="tooltip-arrow" />
          <div className="tooltip-inner">{message}</div>
        </div>
        
        <span 
          className='tooltip-hover__trigger'
          onMouseOver={this.showTooltip}
          >
          {this.props.children}
        </span>
      </div>
    )
  }
}

Tooltip.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  width: PropTypes.string,
  message: PropTypes.string,
  children: PropTypes.node,
};

Tooltip.defaultProps = {
  children: null,
  position: 'top',
  message: 'Text',
  width: '100',
};

export default Tooltip;
