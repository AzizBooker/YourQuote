import React, { useState } from "react";
import QuoteDisplayComponent from "../../components/QuoteDisplay";
import styles from "./styles";
import CustomButton from "../../components/CustomButton";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import {
  Assets,
  TabController,
  Colors,
  View,
  Text,
  Button,
  TabControllerItemProps,
} from "react-native-ui-lib";
import { ColorPicker,ColorSwatch } from "react-native-ui-lib";
import { useTheme } from "@react-navigation/native";

//TODO 2 Show Quote Display with entered information
// TODO 3  Color || Image Picker tab
// TODO 4 Color Picker
// TODO 5 Image Picker

const NewQuoteScreen2 = ({ navigation, route }) => {
  const { colors } = useTheme();
  const { quote, author } = route.params;
  const [backgroundColor, setBackgroundColor] = useState(colors.background);
  const [primaryTextColor, setPrimaryTextColor] = useState(colors.text);

  return (
    <View style={styles.container}>
      <QuoteDisplayComponent
        quote={quote}
        author={author}
        backgroundColor={backgroundColor}
        primaryTextColor={primaryTextColor}
        displayMode
      />

      <View style={{backgroundColor:'#fff',...styles.containerColor}}>

        <View style={{marginBottom:8,}}>
      <Text style={styles.textHeading} >Background Color</Text>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <ColorPicker
          initialColor={backgroundColor}
          colors={[]}
          value={backgroundColor}
          onDismiss={() => console.log("dismissed")}
          onSubmit={(value) => setBackgroundColor(value)}
          onValueChange={() => console.log("value changed")}
        />
        
        </View>
        </View>

           <View style={{marginBottom:8,}}>
      <Text style={styles.textHeading} >Primary Text Color</Text>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <ColorPicker
          initialColor={primaryTextColor}
          colors={[]}
          value={primaryTextColor}
          onDismiss={() => console.log("dismissed")}
          onSubmit={(value) => setPrimaryTextColor(value)}
          onValueChange={() => console.log("value changed")}
        />
        
        </View>
        </View>
      </View>
    </View>
  );
};

export default gestureHandlerRootHOC(NewQuoteScreen2);
//dispatch(AddQuote({quote,author,description,uuid:uuidv4(),collection:dropdownValue}))
