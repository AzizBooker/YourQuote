import { View, Text } from 'react-native'
import React from 'react'

const DisplayQuoteScreen = ({route,navigation}) => {
    console.log(navigation.params)
    console.log(route)
  return (
    <View>
      <Text>DisplayQuoteScreen</Text>
    </View>
  )
}

export default DisplayQuoteScreen