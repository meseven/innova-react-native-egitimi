import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';

import {io} from 'socket.io-client';

let socket;
const App = () => {
  const [activeColor, setActiveColor] = useState('#5fdcba');

  useEffect(() => {
    socket = io('http://localhost:3000');

    socket.on('change-color', color => {
      setActiveColor(color);
    });
  }, []);

  const submitColor = () => {
    socket.emit('new-color', activeColor);
  };

  const onColorChange = color => {
    setActiveColor(color);
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: activeColor}]}>
      <Text style={styles.activeColor}>{activeColor}</Text>
      <View style={{flex: 0.4}}>
        <ColorPicker
          color={activeColor}
          onColorChangeComplete={onColorChange}
          thumbSize={20}
          sliderSize={40}
          row={false}
          swatches={false}
        />
      </View>
      <Button title="Change Back Color" onPress={submitColor} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  activeColor: {
    fontSize: 36,
  },
});

export default App;
