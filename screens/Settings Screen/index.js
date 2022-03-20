import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import AppTitle from '../../components/AppTitle'
const SettingsScreen = () => {
  const {colors}=useTheme()
  return (
    <View >
      <AppTitle />
    </View>
  )
}

export default SettingsScreen