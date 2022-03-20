import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import styles from './styles'
const AppTitle = () => {
const { colors } = useTheme();
  return (
    <View style={{justifyContent:'center',alignItems:'center',marginVertical:10}}>
      <Text style={[{color:colors.text,...styles.text}]}>Your Quote</Text>
    </View>
  )
}

export default AppTitle