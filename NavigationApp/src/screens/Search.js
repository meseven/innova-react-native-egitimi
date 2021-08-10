import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const Search = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder="Search..." />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderColor: '#999',
    borderWidth: 2,
    margin: 5,
    fontSize: 20,
  },
});

export default Search;
