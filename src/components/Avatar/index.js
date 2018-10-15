import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({
  src, title, size
}) => {
  const renderAvatarImg = () => {
    switch (size) {
      case 'large': {
        return <img src={src} className="img-circle" alt={title} style={largeCss} />;
      }
      case 'small': {
        return <img src={src} className="img-circle" alt={title} style={smallCss} />;
      }
      case 'medium': {
        return <img src={src} className="img-circle" alt={title} style={mediumCss} />;
      }
      default:
        return null;
    }   
  };

  return (
    <div style={wrapCss}>
      {renderAvatarImg()}
    </div>
  );
};


Avatar.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'large']),
  title: PropTypes.string,
  src: PropTypes.string,
};

Avatar.defaultProps = {
  large: false,
  title: '',
  src: '',
  size: 'medium',
};

const wrapCss = {
  position: 'relative',
  display: 'inline-block',
  verticalAlign: 'middle',
};

const smallCss = {
  width: '25px',
  height: '25px'
};

const mediumCss = {
  width: '50px',
  height: '50px'
};

const largeCss = {
  width: '125px',
  height: '125px'
};

export default Avatar;
