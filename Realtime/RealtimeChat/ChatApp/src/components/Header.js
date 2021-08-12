import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    borderBottomColor: '#666',
    borderBottomWidth: 2,
    backgroundColor: '#f9f9f9',
  },
  headerText: {
    fontSize: 20,
  },
});

export default Header;
