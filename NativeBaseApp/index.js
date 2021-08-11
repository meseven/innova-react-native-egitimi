/**
 * @format
 */

// import React from 'react';
import {AppRegistry} from 'react-native';
// import {NativeBaseProvider} from 'native-base';
// import App from './App';
// import FormikForms from './src/FormikForms';
import ReactMemoExample from './src/ReactMemoExample';
import {name as appName} from './app.json';

// const AppRoot = () => (
//   <NativeBaseProvider>
//     <FormikForms />
//   </NativeBaseProvider>
// );

AppRegistry.registerComponent(appName, () => ReactMemoExample);
