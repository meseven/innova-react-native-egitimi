import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Posts from '../screens/Posts';

// Home Stack
const Stack = createNativeStackNavigator();
function PostsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Posts" component={Posts} options={{title: 'Posts'}} />
    </Stack.Navigator>
  );
}

export {PostsStackNavigator};
