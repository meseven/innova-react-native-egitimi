import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import styles from './styles';

const Container = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.box3}>
          <Text>Box 3</Text>
        </View>
        <View style={styles.box4}>
          <Text>Box 4</Text>
        </View>
      </View>
      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>
    </View>
  );
};

export default Container;
