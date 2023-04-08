/**
 * @format
 */

import { AppRegistry, Dimensions } from 'react-native';
import WeatherApp from './WeatherApp';
import Offers from './Offers';
import Benzema from './Benzema';
import Screen from './Screen';
import { name as appName } from './app.json';
import Stack from './Stack';
import BookApp from './Book_List_App/BookApp';

// export const windowWidth = Dimensions.get('window').height
// AppRegistry.registerComponent(appName, () => BookApp);
AppRegistry.registerComponent(appName, () => Stack);
