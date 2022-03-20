import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import { useSelector } from 'react-redux'
const QuoteScreen = () => {
  const {colors}=useTheme()

  const collections=useSelector(state=>state.root.collections)
  var quotes=[]
  collections.forEach(collection=>{
    collection.quotes.forEach(quote=>{
        quotes.push(quote)
    })
  })
  console.log(quotes)
  return (
    <SafeAreaView style={{margin:12}}>
      <Text style={{ color: colors.text }}>QuoteScreen</Text>
     
    </SafeAreaView>
  )
}

export default QuoteScreen