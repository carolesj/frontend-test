import React from 'react';
import PropTypes from 'prop-types';
import ReactToggle from 'react-toggle';
import 'react-toggle/style.css';
import './Toggle.scss';

const Toggle = ({defaultChecked, onChange}) => {
  return (
    <ReactToggle
      className='Toggle'
      icons={false}
      defaultChecked={defaultChecked}
      onChange={e => onChange(e.target.checked)}
    />
  );
};

export default Toggle;

Toggle.propTypes = {
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

Toggle.defaultProps = {
  defaultChecked: PropTypes.bool
}
