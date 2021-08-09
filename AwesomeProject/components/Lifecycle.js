import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Text, Button, StyleSheet} from 'react-native';

const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Ahmet');

  useEffect(() => {
    console.log('Bir state değişti');
  });

  useEffect(() => {
    console.log('count state değişti');
  }, [count]);

  useEffect(() => {
    console.log('name  state değişti');
  }, [name]);

  useEffect(() => {
    console.log('Component mount edildi');

    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const setCountData = type => {
    if (type === '-') {
      setCount(c => c - 1);
      return false;
    }

    setCount(c => c + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>{count}</Text>
      </View>
      <View style={styles.buttons}>
        <Button title="Azalt" onPress={() => setCountData('-')} />
        <Button title="Arttır" onPress={() => setCountData('+')} />
      </View>
      <View>
        <Text>{name}</Text>
        <Button title="İsmi Değiştir" onPress={() => setName('Mehmet')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Lifecycle;
