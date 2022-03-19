import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import BottomSheetComponent from '../../components/BottomSheet'
const HomeScreen = () => {
  const state=useSelector(state=>state)
  console.log(state)
  const {colors}=useTheme()
  return (
    <SafeAreaView >
      <Text style={{color:colors.text}}>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen