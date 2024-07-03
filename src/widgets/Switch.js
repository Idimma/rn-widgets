import React, { useState } from 'react';
import { Switch as RNSwitch } from 'react-native';
import PropTypes from 'prop-types';
import { PRIMARY } from '../utils/Colors';

const Switch = ({ initialValue, onChange }) => {
  const [isEnabled, setIsEnabled] = useState(initialValue);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    onChange && onChange(!isEnabled);
  };

  return (
    <RNSwitch
      trackColor={{ false: 'white', true: PRIMARY }}
      ios_backgroundColor={'white'}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

Switch.propTypes = {
  initialValue: PropTypes.bool,
};

Switch.defaultProps = {
  initialValue: false,
};

export default Switch;
