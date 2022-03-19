
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LightTheme from './Util/LightTheme'
import DarkTheme from './Util/DarkTheme';
import RootNavigator from './navigation/rootNavigator';
import { Provider } from 'react-redux'
import store from './Redux/store';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer theme={DarkTheme}>
      <StatusBar hidden={true} />
      <RootNavigator />
    </NavigationContainer>
    </Provider>
  );
}

