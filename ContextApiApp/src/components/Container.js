import React from 'react';
import {View, StyleSheet} from 'react-native';

import ThemeSwitchButton from './ThemeSwitchButton';
import Settings from './Settings';

import {useTheme} from '../context/ThemeContext';

const Container = () => {
  const {theme} = useTheme();

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme === 'dark' ? '#666' : '#f8f8f8'},
      ]}>
      <ThemeSwitchButton />
      <Settings />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});

export default Container;
