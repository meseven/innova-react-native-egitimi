import React, {useContext} from 'react';
import {View, Button} from 'react-native';

import ThemeContext from '../context/ThemeContext';

const ThemeSwitchButton = () => {
  const {theme, setTheme} = useContext(ThemeContext);

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
