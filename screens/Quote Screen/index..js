import { View, Text,SafeAreaView,FlatList,TouchableOpacity,TouchableHighlight } from 'react-native'
import React ,{useEffect} from 'react'
import { useTheme } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import AppTitle from '../../components/AppTitle'
import QuoteListItem from '../../components/QuoteListItem'
import { AdMobBanner,setTestDeviceIDAsync } from "expo-ads-admob";
//FIXME New Quotes not showing on QuotesScreen
const QuoteScreen = ({navigation,route}) => {


  useEffect(() => {
    
    setTestDeviceIDAsync('EMULATOR')
     
    }, )

  const {colors}=useTheme()
  const name=route.params.name

  const collections=useSelector(state=>state.root.collections)
  var quotes=[]
  collections.forEach((collection,index)=>{
    const collectionName=collection.name
   
    if(collectionName.toLowerCase()==name.toLowerCase()){
    collection.quotes.forEach((quote)=>{
      console.log(quote)
        quotes.push({name:collectionName,...quote})
    })
  }
  })
  


const renderItem=({item,index})=>{
  
 
  return <QuoteListItem item={item} index={index} navigation={navigation} quotes={quotes} />
 
}

  return (
    <SafeAreaView style={{flex:1,margin:12}}>
      <AppTitle />
      <FlatList style={{marginBottom:20}} data={quotes} renderItem={renderItem} 
      keyExtractor={item=>item.uuid}/>
       <AdMobBanner 
        style={{position:"absolute",bottom:0}}
        bannerSize="smartBanner"
        adUnitID="ca-app-pub-3169309057668103/2584197472"
        servePersonalizedAds={true}
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
      />
    </SafeAreaView>
  )
}

export default QuoteScreen