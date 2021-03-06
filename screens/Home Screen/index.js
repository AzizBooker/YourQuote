import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { AdMobBanner,setTestDeviceIDAsync } from "expo-ads-admob";
import React ,{useEffect} from "react";
import { useTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AppTitle from "../../components/AppTitle";
import CollectionListItem from "../../components/CollectionListItem";
import {
  NotoSerifKR_200ExtraLight,
  NotoSerifKR_300Light,
  NotoSerifKR_400Regular,
  NotoSerifKR_500Medium,
  NotoSerifKR_600SemiBold,
  NotoSerifKR_700Bold,
  NotoSerifKR_900Black,
} from "@expo-google-fonts/noto-serif-kr";

const HomeScreen = ({navigation}) => {

 
  
  collections = useSelector((state) => state.root.collections);

  const { colors } = useTheme();

  useEffect(() => {
    
  setTestDeviceIDAsync('EMULATOR')
   
  }, )
  
  

  const renderItem = ({ item }) => {
    var quotes=item.quotes
    var uuid=item.uuid
    var collectionName = item.name;
    collectionName =
      collectionName.charAt(0).toUpperCase() + collectionName.substring(1);
    const quoteCount = item.quotes.length;
    return (
      <CollectionListItem
        collectionName={collectionName}
        quoteCount={quoteCount}
        uuid={uuid}
        navigation={navigation}
        allQuotes={quotes}
      />
    );
  };
  const ListHeaderComponent=()=>{
    let quotes=[]
    const collections=useSelector(state=>state.root.collections)
    collections.forEach(collection=>{
      collection.quotes.forEach(quote=>{
        quotes.push(quote)
      })
    })
    
    return(
    <CollectionListItem
      collectionName="All Quotes"
      quoteCount={quotes.length}
      navigation={navigation}
      allQuotes={quotes}
       disabled
    />

     )
  }
  return (
    <SafeAreaView style={{flex:1, margin: 12 }}>
      
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={collections}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
      
      <AdMobBanner 
        style={{position:"absolute",bottom:0}}
        bannerSize="smartBanner"
        adUnitID="ca-app-pub-3169309057668103/1658128610"
        servePersonalizedAds={true}
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
      />
      

      
    </SafeAreaView>
  );
};

export default HomeScreen;

//!Possible Fonts
/*
1.Inter
2. noto-serif-jp
*/
