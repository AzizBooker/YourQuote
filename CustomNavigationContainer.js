import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigation/rootNavigator'
import LightTheme from './Util/LightTheme'
import DarkTheme from './Util/DarkTheme';
import { useSelector } from 'react-redux'
import 'react-native-gesture-handler';
const CustomNavigationContainer = () => {
  const isDarkMode= useSelector(state=>state.settings.isDarkMode)
  
  var theme={}
  if (isDarkMode==true){
     theme=DarkTheme
  }else{
     theme=LightTheme
  }
  return (
    <>
    <NavigationContainer theme={theme}>
      <StatusBar hidden={true} />
      <RootNavigator />
    </NavigationContainer>
    </>
  )
}

export default CustomNavigationContainer