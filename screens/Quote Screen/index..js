import { View, Text,SafeAreaView,FlatList,TouchableOpacity,TouchableHighlight } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import AppTitle from '../../components/AppTitle'
const QuoteScreen = ({navigation}) => {
  const {colors}=useTheme()

  const collections=useSelector(state=>state.root.collections)
  var quotes=[]
  collections.forEach((collection,index)=>{
    const collectionName=collection.name
    collection.quotes.forEach((quote)=>{
        quotes.push({name:collectionName,...quote})
    })
  })


const renderItem=({item,index})=>{
 
  const quote=item.quote
  const author=item.author
  const uuid=item.uuid
  const collectionName=item.name.toLowerCase()
  const description=item.description

 // console.log(collectionName)
  return(
    <TouchableOpacity onPress={()=>{
      console.warn(`Pressed on Quote by:${author}`)
      navigation.navigate('DisplayQuote' ,{uuid,quote,author,collectionName,description,allQuotes:quotes,currentIndex:index})
      }}>
    <View style={{marginBottom:12}}>
      <View style={{marginBottom:6}}>
      <Text style={{color:colors.text,opacity:0.8}}>{collectionName}</Text>
      </View>
      <Text style={{fontSize:18,color:colors.text}}>{quote}</Text>
      <Text style={{color:colors.text,opacity:0.8,marginTop:8}}>{author}</Text>
      <View style={{borderBottomColor:colors.text,borderBottomWidth:0.6,marginTop:10}}></View>
    </View>
    </TouchableOpacity>
  )
}

  return (
    <SafeAreaView style={{margin:12}}>
      <AppTitle />
      <FlatList style={{marginBottom:20}} data={quotes} renderItem={renderItem} 
      keyExtractor={item=>item.uuid}/>
    </SafeAreaView>
  )
}

export default QuoteScreen