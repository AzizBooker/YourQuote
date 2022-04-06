
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import LightTheme from './Util/LightTheme'
import DarkTheme from './Util/DarkTheme';
import RootNavigator from './navigation/rootNavigator';
import { Provider } from 'react-redux'
import store from './Redux/store';
import CustomNavigationContainer from './CustomNavigationContainer';
import { useSelector } from 'react-redux';
import { MenuProvider } from 'react-native-popup-menu';
import AppLoading from 'expo-app-loading'
import { useFonts,  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black  } from '@expo-google-fonts/inter';

  //TODO 5C Add Back Button on all Screens
export default function App() {

  let [fontsLoaded]=useFonts({
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black 
  })
  if(!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <Provider store={store}>
      <MenuProvider>
      <CustomNavigationContainer />
      </MenuProvider>
    </Provider>
  );
}

