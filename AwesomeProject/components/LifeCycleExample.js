import React, {useState} from 'react';
import {Text, StyleSheet, Button, SafeAreaView} from 'react-native';

import Lifecycle from './Lifecycle';

const LifeCycleExample = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {isVisible && <Lifecycle />}
      <Button title="Toggle" onPress={() => setIsVisible(!isVisible)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LifeCycleExample;
