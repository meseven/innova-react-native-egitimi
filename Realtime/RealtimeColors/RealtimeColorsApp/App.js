import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';

import {io} from 'socket.io-client';

let socket;
const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState(null);
  const [activeColor, setActiveColor] = useState({
    color: '#5fdcba',
    owner: null,
  });

  useEffect(() => {
    socket = io('http://localhost:3000');

    socket.on('change-color', data => {
      setActiveColor(data);
    });
  }, []);

  const submitColor = () => {
    socket.emit('new-color', {color: activeColor.color, owner: name});
  };

  const onColorChange = color => {
    setActiveColor({...activeColor, color});
  };

  const login = () => {
    if (name) {
      setIsLogin(true);
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: activeColor.color}]}>
      {isLogin && (
        <View style={styles.panel}>
          <Text style={styles.activeColor}>{activeColor.color}</Text>
          {activeColor.owner && (
            <Text style={styles.activeColor}>from {activeColor.owner}</Text>
          )}
          <View style={{flex: 0.4}}>
            <ColorPicker
              color={activeColor.color}
              onColorChangeComplete={onColorChange}
              thumbSize={20}
              sliderSize={40}
              row={false}
              swatches={false}
            />
          </View>
          <Button title="Change Back Color" onPress={submitColor} />
        </View>
      )}

      {!isLogin && (
        <View style={styles.login}>
          <Text style={styles.formTitle}>Please enter a name</Text>
          <TextInput style={styles.input} onChangeText={setName} />
          <TouchableOpacity style={styles.loginBtn} onPress={login}>
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activeColor: {
    fontSize: 36,
  },
  panel: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  formTitle: {
    fontSize: 24,
  },
  input: {
    borderWidth: 2,
    borderColor: '#999',
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    fontSize: 24,
  },
  loginBtn: {
    marginVertical: 10,
  },
  loginBtnText: {
    fontSize: 24,
    color: 'blue',
  },
});

export default App;
