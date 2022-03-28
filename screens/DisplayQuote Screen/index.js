import { View, Text, ScrollView, Button, Modal } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { BlurView } from "@react-native-community/blur";

import AppTitle from "../../components/AppTitle";

const DisplayQuoteScreen = ({ route, navigation }) => {
  const [visible, setVisible] = useState(false);
  const { author, quote, description, collection } = route.params;
  const { colors } = useTheme();

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
          
          <Button title="back" style={{margin:12}} onPress={()=>{setVisible(false)}}/>
          <View  style={{flex:1,backgroundColor:colors.background,opacity:0.9,justifyContent:'center',alignContent:'center'}}>
            <Text style={{color:colors.text,opacity:1,textAlign:'left',marginBottom:30,marginHorizontal:12,fontSize:24}}>{description}</Text>
          </View>
        </Modal>
      </View>
      <ScrollView style={{ marginTop: "20%" }}>
        <Text style={{ color: colors.text, fontSize: 30, textAlign: "left" }}>
          {quote}
        </Text>
        <Text
          style={{
            color: colors.card,
            fontSize: 18,
            textAlign: "right",
            marginTop: 14,
          }}
        >
          {author}
        </Text>
      </ScrollView>
    </View>
  );
};

export default DisplayQuoteScreen;
