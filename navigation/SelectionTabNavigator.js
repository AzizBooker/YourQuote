import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TextSelectionScreen from '../screens/TextSelectionScreen';
const Tab = createMaterialTopTabNavigator();

const SelectionTabNavigator = () => {


  return (
    <Tab.Navigator>
        <Tab.Screen name="TextSelection" component={TextSelectionScreen} />
    </Tab.Navigator>
  )
}

export default SelectionTabNavigator