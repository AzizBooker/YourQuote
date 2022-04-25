import {
  View,
  Text,
  ScrollView,
  Button,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
  useWindowDimensions
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { BlurView } from "@react-native-community/blur";
import { useSelector, useDispatch } from "react-redux";
import { ToggleQuoteFavorite } from "../../Redux/rootSlice";
import AppTitle from "../../components/AppTitle";
import { Fader } from "react-native-ui-lib";
import { Carousel } from "react-native-ui-lib";
import Ionicons from "react-native-vector-icons/Ionicons";
import QuoteDisplayComponent from "../../components/QuoteDisplay";
import styles from "./styles";



const DisplayQuoteScreen = ({ route, navigation }) => {
  const [visible, setVisible] = useState(false);

  
  const { colors } = useTheme();
  const window=useWindowDimensions()
  const dispatch = useDispatch();

  const collections = useSelector((state) => state.root.collections);
  var allQuotes = [];
  collections.forEach((collection, index) => {
    const collectionName = collection.name;
    collection.quotes.forEach((quote) => {
      allQuotes.push({ name: collectionName, ...quote });
    });
  });

  const { quotes,index} =
    route.params;
    console.warn(index)
   

  const renderItems=({item})=> {
    const {quote,author,backgroundColor,primaryTextColor,secondaryTextColor,description}=item
  
    return( 
        <View style={{flex:1,width:window.width,height:window.height,backgroundColor,paddingHorizontal:12,paddingVertical:10}}>
          <QuoteDisplayComponent navigation={navigation} quote={quote} author={author} description={description} backgroundColor={backgroundColor} primaryTextColor={primaryTextColor} secondaryTextColor={secondaryTextColor}/>
        </View>
    )
    /*
    <View style={{flex:1, paddingHorizontal: 20,backgroundColor:backgroundColor }}>
      <View style={{marginTop: 12 }}>
      <View
          style={{
            marginBottom:20
            
          }}
        >
        <TouchableWithoutFeedback   onPress={()=>{navigation.goBack()}}>
      <Ionicons  name={"arrow-back-outline"} size={40} color={"#fff"} />
      </TouchableWithoutFeedback>
      </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "space-between",
          }}
        >
          <TouchableWithoutFeedback
            style={{ marginHorizontal: 12 }}
            onPress={() => {
              dispatch(ToggleQuoteFavorite({ uuid }));
            }}
          >
            <Ionicons name={"star-outline"} size={30} color={"#fff"} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setVisible(true);
            }}
          >
            <Ionicons name={"information-outline"} size={30 } color={"#fff"} />
          </TouchableWithoutFeedback>
        </View>
        </View>
        <Modal
          animationType="slide"
          visible={visible}
          transparent={true}
          onRequestClose={() => {
            setVisible(false);
          }}
        >
          <TouchableWithoutFeedback
            
            style={{ margin: 12 }}
            onPress={() => {
              setVisible(false);
            }}
          >
         <Ionicons name={"arrow-back-outline"} size={30} color={"#fff"} />
         
          </TouchableWithoutFeedback>
          <View
            style={{
              backgroundColor: colors.background,
              ...styles.infoTextContainer,
            }}
          >
            <Text style={{ color: colors.text, ...styles.infoPrimaryText }}>
              {description}
            </Text>
          </View>
        </Modal>
      
      <QuoteDisplayComponent quote={quote} author={author} backgroundColor={backgroundColor} primaryTextColor={primaryTextColor} secondaryTextColor={secondaryTextColor}/>
     
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom:30
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            const incrementIndex = currentIndex - 1;
            const quote = allQuotes[incrementIndex];
            console.log(`index:${currentIndex} `);
            if (currentIndex + 1 < allQuotes.length) {
              navigation.navigate("DisplayQuote", {
                ...quote,
                currentIndex: incrementIndex,
                allQuotes,
              });
            }
          }}
        >
          <Ionicons name={"play-back-sharp"} size={40} color={"#fff"} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            const quote =
              allQuotes[Math.floor(Math.random() * allQuotes.length)];
            navigation.navigate("DisplayQuote", {
              ...quote,
              currentIndex: currentIndex,
              allQuotes,
            });
          }}
        >
          <Ionicons name={"refresh-outline"} size={60} color={"#fff"} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          title="Next"
          onPress={() => {
            const incrementIndex = currentIndex + 1;

            const quote = allQuotes[incrementIndex];

            if (currentIndex + 1 < allQuotes.length) {
              navigation.navigate("DisplayQuote", {
                ...quote,
                currentIndex: incrementIndex,
                allQuotes,
              });
            }
          }}
        >
          <Ionicons name={"play-forward-sharp"} size={40} color={"#fff"} />
        </TouchableWithoutFeedback>
      </View>
    </View>
    */
  
        };


  return(
    <View>
    <FlatList 
    horizontal
    data={quotes}
    renderItem={renderItems}
    keyExtractor={item=>item.uuid}
    snapToAlignment="start"
    snapToInterval={window.width}
    initialScrollIndex={index}
    />
    </View>
  )
};

export default DisplayQuoteScreen;
