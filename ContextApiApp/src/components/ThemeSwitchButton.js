import React from 'react';
import {View, Button} from 'react-native';

import {useTheme} from '../context/ThemeContext';

const ThemeSwitchButton = () => {
  const {theme, setTheme} = useTheme();

  return (
    <View>
      <Button
        title={`Change theme - Active Theme(${theme})`}
        onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
    </View>
  );
};

export default ThemeSwitchButton;
