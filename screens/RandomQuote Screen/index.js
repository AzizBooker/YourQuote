import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import AppTitle from '../../components/AppTitle'
//TODO 2 Call random quote when pressed
const RandomQuoteScreen = () => {
  const {colors}=useTheme()
  return (
    <View >
      <AppTitle />
    </View>
  )
}

export default RandomQuoteScreen