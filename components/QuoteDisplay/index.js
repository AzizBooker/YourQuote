import { View, Text,ScrollView } from 'react-native'
import React from 'react'
//TODO 1 Implement Quote Display
import { useTheme } from '@react-navigation/native'
import { Fader } from "react-native-ui-lib";
import { ColorPicker } from 'react-native-ui-lib';
import styles from './styles'
const QuoteDisplayComponent = ({quote,author,backgroundColor,primaryTextColor,secondaryTextColor,displayMode}) => {
  const {colors}=useTheme()

    if(displayMode==null){
  return (
  
    
    <ScrollView
        contentContainerStyle={{backgroundColor:backgroundColor, justifyContent: "space-around" }}
        style={{ marginTop: "20%", marginBottom: "10%" }}
      >
        
        <View>
          <Text
            style={{...styles.textQuote,color:primaryTextColor,}}
          >
            {quote}
          </Text>

          <Text
            style={{...styles.textAuthor,color: colors.card,}}
          >
            - {author}
          </Text>
        </View>
        
      </ScrollView>
  )
    }
  else{
    return(
    <View
        style={{flex:1,padding:12,backgroundColor:backgroundColor, justifyContent: "space-around" }}
      >
        
        <View>
          <Text
            style={{...styles.textQuote,color: colors.text,}}
          >
            {quote}
          </Text>

          <Text
            style={{...styles.textAuthor,color: colors.card,}}
          >
            - {author}
          </Text>
        </View>
        
      </View>
    )
  }
}

export default QuoteDisplayComponent