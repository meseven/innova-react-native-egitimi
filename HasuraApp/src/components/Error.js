import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Error = ({message}) => {
  return (
    <View style={styles.container}>
      <Text>Error: {message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Error;
