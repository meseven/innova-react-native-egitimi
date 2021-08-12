import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Form = () => {
  return (
    <TextInput
      placeholder="Enter message"
      style={styles.textInput}
      returnKeyType="send"
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: '#666',
    borderWidth: 2,
    paddingHorizontal: 10,
    fontSize: 16,
    margin: 2,
    backgroundColor: '#f9f9f9',
  },
});

export default Form;
