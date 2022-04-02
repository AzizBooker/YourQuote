
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import LightTheme from './Util/LightTheme'
import DarkTheme from './Util/DarkTheme';
import RootNavigator from './navigation/rootNavigator';
import { Provider } from 'react-redux'
import store from './Redux/store';
import CustomNavigationContainer from './CustomNavigationContainer';
import { useSelector } from 'react-redux';
import { MenuProvider } from 'react-native-popup-menu';
export default function App() {


  return (
    <Provider store={store}>
      <MenuProvider>
      <CustomNavigationContainer />
      </MenuProvider>
    </Provider>
  );
}

