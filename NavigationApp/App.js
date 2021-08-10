import React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HeaderLogo from './src/components/HeaderLogo';

import Ionicons from 'react-native-vector-icons/Ionicons';

// screens
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Settings from './src/screens/Settings';

// Home Stack
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitle: ' ',
      }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          // title: () => <HeaderLogo />,
          headerTitle: () => <HeaderLogo />,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Right"
              color="#fff"
            />
          ),
          headerLeft: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Left"
              color="#fff"
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={Details}
        options={({route}) => ({
          title: route.params.title,
          // headerShown: false,
        })}
      />
    </HomeStack.Navigator>
  );
}

// Settings Stack
const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SettingsScreen" component={Settings} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </SettingsStack.Navigator>
  );
}

// Tab Navigator

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Settings') {
              iconName = 'cog';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{tabBarBadge: 3}}
        />
      </Tab.Navigator>
      {/*  */}
    </NavigationContainer>
  );
};

export default App;
