import React from 'react';
import {SafeAreaView} from 'react-native';

import ThemeSwitchButton from './src/components/ThemeSwitchButton';
import Settings from './src/components/Settings';

import {ThemeContextProvider} from './src/context/ThemeContext';

const App = () => {
  return (
    <SafeAreaView>
      <ThemeContextProvider>
        <ThemeSwitchButton />
        <Settings />
      </ThemeContextProvider>
    </SafeAreaView>
  );
};

export default App;
