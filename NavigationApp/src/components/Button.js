import React from 'react';
import {TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Ionicons {...props} />
    </TouchableOpacity>
  );
};

export default Button;
