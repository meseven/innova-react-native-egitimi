/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import Container from './components/Container';
import LifecycleExample from './components/LifeCycleExample';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LifecycleExample);
