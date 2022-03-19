import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
const RandomQuoteScreen = () => {
  const {colors}=useTheme()
  return (
    <View >
      <Text style={{color:colors.text}}>RandomQuoteScreen</Text>
    </View>
  )
}

export default RandomQuoteScreen