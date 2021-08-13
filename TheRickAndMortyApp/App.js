import React from 'react';
import {Text, View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './src/screens/Home';

const App = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Characters'}}
        />
      </Stack.Navigator>
    </>
  );
};

export default App;
