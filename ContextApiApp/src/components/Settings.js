import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import ThemeContext from '../context/ThemeContext';

const Settings = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <View>
      <Text>Settings</Text>
      <Text>Theme: {theme}</Text>
    </View>
  );
};

export default Settings;
