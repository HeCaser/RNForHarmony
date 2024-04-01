/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import InitParam from './pages/init_param/InitParam';
import BridgeDemo from './pages/bridge/BridgeDemo';

AppRegistry.registerComponent('app_name', () => App);
AppRegistry.registerComponent('init_param', () => InitParam)
AppRegistry.registerComponent('bridge', () => BridgeDemo)
