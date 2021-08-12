import React from 'react';
import {View, Text, Button} from 'react-native';

import {useTheme} from '../context/ThemeContext';

const Settings = () => {
  const {theme, setTheme} = useTheme();

  return (
    <View>
      <Text>Settings</Text>
      <Text>Theme: {theme}</Text>
      <Button
        title={`Change theme - Active Theme(${theme})`}
        onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
    </View>
  );
};

export default Settings;
