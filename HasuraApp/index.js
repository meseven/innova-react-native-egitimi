import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import client from './apollo';

const AppRoot = () => (
  <NavigationContainer>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => AppRoot);
