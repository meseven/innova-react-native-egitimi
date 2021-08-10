import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {SettingsStackNavigator, SearchStackNavigator} from './StackNavigator';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="HomeDrawer"
        component={TabNavigator}
        options={{title: 'Home'}}
      />
      <Drawer.Screen name="Search" component={SearchStackNavigator} />
      <Drawer.Screen name="Settings" component={SettingsStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
