import {
  View,
  Text,
  ScrollView,
  Button,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { BlurView } from "@react-native-community/blur";
import { useSelector, useDispatch } from "react-redux";
import { ToggleQuoteFavorite } from "../../Redux/rootSlice";
import AppTitle from "../../components/AppTitle";
import Ionicons from "react-native-vector-icons/Ionicons";

import style from "./styles";
import styles from "./styles";

//TODO 2C Add Favorite and information Icons Button
//TODO 3C Add Icons for Random and Backward buttons
//TODO 4C Style InfoScreen Buttons
const DisplayQuoteScreen = ({ route, navigation }) => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const collections = useSelector((state) => state.root.collections);
  var allQuotes = [];
  collections.forEach((collection, index) => {
    const collectionName = collection.name;
    collection.quotes.forEach((quote) => {
      allQuotes.push({ name: collectionName, ...quote });
    });
  });

  const { author, description, quote, collectionName, currentIndex, uuid } =
    route.params;

  const { colors } = useTheme();

  return (
    <View style={{flex:1, marginHorizontal: 20 }}>
      <View style={{ alignItems: "flex-end", marginTop: 12 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "space-between",
          }}
        >
          <TouchableWithoutFeedback
            style={{ marginHorizontal: 12 }}
            onPress={() => {
              dispatch(ToggleQuoteFavorite({ uuid }));
            }}
          >
            <Ionicons name={"star-outline"} size={20} color={"#fff"} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setVisible(true);
            }}
          >
            <Ionicons name={"information-outline"} size={20} color={"#fff"} />
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
      
      <ScrollView
        contentContainerStyle={{  justifyContent: "space-around" }}
        style={{ marginTop: "20%", marginBottom: "10%" }}
      >
        <View>
          <Text
            style={{
              color: colors.text,
              fontSize: 30,
              textAlign: "left",
              fontFamily: "Inter_400Regular",
            }}
          >
            {quote}
          </Text>

          <Text
            style={{
              color: colors.card,
              fontSize: 18,
              textAlign: "right",
              marginTop: 10,
            }}
          >
            - {author}
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
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
  );
};

export default DisplayQuoteScreen;
