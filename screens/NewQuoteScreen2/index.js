import React, { useState } from "react";
import {ScrollView } from "react-native";
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
import * as ImagePicker from 'expo-image-picker';
import SelectionTabNavigator from "../../navigation/SelectionTabNavigator";
import TextSelectionScreen from "../TextSelectionScreen";
import { useDispatch } from "react-redux";
import { AddQuote } from "../../Redux/rootSlice";
//TODO 2 Show Quote Display with entered information
// TODO 3  Color || Image Picker tab
// TODO 4 Color Picker
// TODO 5 Image Picker

const NewQuoteScreen2 = ({ navigation, route }) => {
  const { colors } = useTheme();
  const dispatch=useDispatch()
  const { quote, author,description,uuid,collection } = route.params;
  const [backgroundColor, setBackgroundColor] = useState(colors.background);
  const [backgroundImage,setBackgroundImage]=useState(null)
  const [primaryTextColor, setPrimaryTextColor] = useState(colors.text);
  const [secondaryTextColor, setSecondaryTextColor] = useState(colors.card);


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing:true
    });
    if (!result.cancelled) {
      setBackgroundImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
    
      <QuoteDisplayComponent
        quote={quote}
        author={author}
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
        primaryTextColor={primaryTextColor}
        secondaryTextColor={secondaryTextColor}
        displayMode
      />


      <View style={{...styles.containerColor}}>
      <ScrollView persistentScrollbar >
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

      <View style={{marginBottom:8,}}>
      <Text style={styles.textHeading} >Secondary Text Color</Text>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <ColorPicker
          initialColor={secondaryTextColor}
          colors={[]}
          value={secondaryTextColor}
          onDismiss={() => console.log("dismissed")}
          onSubmit={(value) => setSecondaryTextColor(value)}
          onValueChange={() => console.log("value changed")}
        />
        
        </View>
        </View>
        <View style={{marginBottom:8,}}>
     
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        
       
        
        </View>
        </View>
        <CustomButton label="Create" onPress={()=>{
        dispatch(AddQuote({quote,author,description,uuid,collection,backgroundColor,backgroundImage
          ,primaryTextColor,secondaryTextColor,favorite:false
        }))
        navigation.navigate('Tab')
        }}/>
        </ScrollView>
       
      </View>
    </View>
  );
};

export default gestureHandlerRootHOC(NewQuoteScreen2);
//dispatch(AddQuote({quote,author,description,uuid:uuidv4(),collection:dropdownValue}))

/*
<ScrollView persistentScrollbar >
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

      <View style={{marginBottom:8,}}>
      <Text style={styles.textHeading} >Secondary Text Color</Text>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <ColorPicker
          initialColor={secondaryTextColor}
          colors={[]}
          value={secondaryTextColor}
          onDismiss={() => console.log("dismissed")}
          onSubmit={(value) => setSecondaryTextColor(value)}
          onValueChange={() => console.log("value changed")}
        />
        
        </View>
        </View>
        <View style={{marginBottom:8,}}>
      <Text style={styles.textHeading} >Background Image</Text>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <CustomButton title='Image' onPress={pickImage} />
        
        </View>
        </View>
        </ScrollView>
        */