/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import Container from './components/Container';
// import LifecycleExample from './components/LifeCycleExample';
// import {FlatListExample, ScrollviewExample} from './components/FlatListExample';
// import {FlatListExampleInfinity} from './components/FlatListExampleInfinity';
import Fetching from './components/Fetching';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Fetching);
