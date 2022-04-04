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
import { useSelector } from "react-redux";
import AppTitle from "../../components/AppTitle";
import Ionicons from "react-native-vector-icons/Ionicons";

import style from "./styles";
import styles from "./styles";
const DisplayQuoteScreen = ({ route, navigation }) => {
  const [visible, setVisible] = useState(false);

  const collections = useSelector((state) => state.root.collections);
  var allQuotes = [];
  collections.forEach((collection, index) => {
    const collectionName = collection.name;
    collection.quotes.forEach((quote) => {
      allQuotes.push({ name: collectionName, ...quote });
    });
  });

  const { author, description, quote, collectionName, currentIndex } =
    route.params;

  const { colors } = useTheme();
  console.log(route.params);
  return (
    <View style={{ flex: 1, margin: 12, marginHorizontal: 20 }}>
      <View style={{ alignItems: "flex-end", marginTop: 12 }}>
        <Button
          style={{ alignSelf: "right" }}
          title="Info"
          onPress={() => {
            setVisible(true);
          }}
        />
        <Modal
          animationType="slide"
          visible={visible}
          transparent={true}
          onRequestClose={() => {
            setVisible(false);
          }}
        >
          <Button
            title="back"
            style={{ margin: 12 }}
            onPress={() => {
              setVisible(false);
            }}
          />
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
      </View>
      <ScrollView
        contentContainerStyle={{ flex: 1, justifyContent: "space-around" }}
        style={{ marginTop: "20%" }}
      >
        <View>
          <Text style={{ color: colors.text, fontSize: 30, textAlign: "left",fontFamily:'Inter_400Regular' }}>
            {quote}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: colors.card,
              fontSize: 18,
              textAlign: "right",
              marginTop: 0,
            }}
          >
            - {author}
          </Text>
          <View
            style={{
              flex: 1,
              position: "absolute",
              bottom: 15,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <View>
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
                <>
                <Ionicons name={'play-back-sharp'} size={20} color={'#fff'} />
                </>
                
              </TouchableWithoutFeedback>
            </View>

            <Button
              title="Random"
              onPress={() => {
                const quote =
                  allQuotes[Math.floor(Math.random() * allQuotes.length)];
                navigation.navigate("DisplayQuote", {
                  ...quote,
                  currentIndex: currentIndex,
                  allQuotes,
                });
              }}
            />
            <Button
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
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DisplayQuoteScreen;
