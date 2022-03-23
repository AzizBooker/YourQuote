import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const TestScreen=()=>{

    return(
      <View>
        <Text>Test</Text>
      </View>
    )
}
const AddNewNavigator = () => {
  const Stack=createNativeStackNavigator()
  return (
    <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerShown:false,
      presentation:"transparentModal"
    }}
    >
      <Stack.Screen name="AddNewModal" component={TestScreen}/>
    </Stack.Navigator>
  )
}

export default AddNewNavigator