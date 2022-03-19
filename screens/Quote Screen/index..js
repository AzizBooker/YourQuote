import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
const QuoteScreen = () => {
  const {colors}=useTheme()
  return (
    <View >
      <Text style={{color:colors.text}}>QuoteScreen</Text>
    </View>
  )
}

export default QuoteScreen