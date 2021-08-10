import React from 'react';
import {Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MenuButton from '../components/Button';
import HeaderLogo from '../components/HeaderLogo';

// screens
import Home from '../screens/Home';
import Details from '../screens/Details';
import Settings from '../screens/Settings';
import Search from '../screens/Search';

// Home Stack
const HomeStack = createNativeStackNavigator();
function HomeStackNavigator(props) {
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
            <MenuButton
              onPress={() => props.navigation.toggleDrawer()}
              color="#fff"
              name={'menu-outline'}
              size={30}
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
function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={Settings}
        options={{title: 'Settings'}}
      />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </SettingsStack.Navigator>
  );
}

// Search Stack
const SearchStack = createNativeStackNavigator();
function SearchStackNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={Search}
        options={{title: 'Search'}}
      />
    </SearchStack.Navigator>
  );
}

export {HomeStackNavigator, SettingsStackNavigator, SearchStackNavigator};
