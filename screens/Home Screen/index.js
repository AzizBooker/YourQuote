import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
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
  const collections = useSelector((state) => state.root.collections);

  const { colors } = useTheme();

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
  return (
    <SafeAreaView style={{ margin: 12 }}>
      <AppTitle />
      <FlatList
        data={collections}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
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
