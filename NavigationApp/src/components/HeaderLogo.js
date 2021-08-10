import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const HeaderLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 45, height: 45}}
        source={require('../assets/header_logo.png')}
      />
      <Text style={styles.title}>My News</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default HeaderLogo;
