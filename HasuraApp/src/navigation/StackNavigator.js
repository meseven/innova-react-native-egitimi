import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Posts from '../screens/Posts';
import PostDetail from '../screens/PostDetail';

// Home Stack
const Stack = createNativeStackNavigator();
function PostsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Posts" component={Posts} options={{title: 'Posts'}} />
      <Stack.Screen
        name="PostDetail"
        component={PostDetail}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
}

export {PostsStackNavigator};
