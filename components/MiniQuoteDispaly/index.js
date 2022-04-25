
import { View, Text,ScrollView,TouchableWithoutFeedback,Modal } from 'react-native'
import React ,{useState} from 'react'
//TODO 1 Implement Quote Display
import { useTheme } from '@react-navigation/native'
import { Fader } from "react-native-ui-lib";
import { ColorPicker } from 'react-native-ui-lib';
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from './styles'

const MiniQuoteDisplayComponent = ({quote,author,description,backgroundColor,backgroundImage,primaryTextColor,secondaryTextColor,displayMode}) => {
    const {colors}=useTheme()
    const [visible,setVisible]=useState(false)
       
   
  return(
    <View
        style={{flex:1,padding:20,backgroundColor:backgroundColor, justifyContent: "space-around" }}
      >
        
        <View >
          <Text
            style={{...styles.textQuote,color:primaryTextColor}}
          >
            {quote}
          </Text>

          <Text
           style={{...styles.textAuthor,color:secondaryTextColor}}
          >
            - {author}
          </Text>
        </View>
        
      </View>
    ) 
  }

export default MiniQuoteDisplayComponent