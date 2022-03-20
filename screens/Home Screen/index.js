import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";
import BottomSheetComponent from "../../components/BottomSheet";
import AppTitle from "../../components/AppTitle";
const HomeScreen = () => {
  const collections = useSelector((state) => state.root.collections);

  const { colors } = useTheme();

  const renderItem = ({ item }) => {
    var collectionName=item.name;
    collectionName=collectionName.charAt(0).toUpperCase()+collectionName.substring(1)
    const quoteCount = item.quotes.length;

    return (
      <TouchableWithoutFeedback onPress={()=>{console.log('Hello')}}>
        <View>
          <Text style={{fontSize:24,color:colors.text}}>{collectionName}</Text>
          <Text style={{fontSize:18,color:colors.text,opacity:0.8}}>{quoteCount}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <SafeAreaView style={{margin:12}}>
      <AppTitle />
      <FlatList data={collections} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default HomeScreen;
