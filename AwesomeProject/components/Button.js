import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import PropTypes from 'prop-types';

const MyButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

MyButton.propTypes = {
  title: PropTypes.string.isRequired,
};

MyButton.defaultProps = {
  title: 'Button',
};

export default MyButton;
