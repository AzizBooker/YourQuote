import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
const SettingsScreen = () => {
  const {colors}=useTheme()
  return (
    <View >
      <Text style={{color:colors.text}}>SettingsScreen</Text>
    </View>
  )
}

export default SettingsScreen