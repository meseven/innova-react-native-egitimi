import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {SettingsStackNavigator, SearchStackNavigator} from './StackNavigator';
import TabNavigator from './TabNavigator';

function DrawerContent() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f8f8f8',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingVertical: 40,
      }}>
      <Text>Copyright 2020 </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          width: 200,
        },
      }}>
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
