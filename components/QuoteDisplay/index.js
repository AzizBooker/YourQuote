import { View, Text,ScrollView,TouchableWithoutFeedback,Modal } from 'react-native'
import React ,{useState} from 'react'
//TODO 1 Implement Quote Display
import { useTheme } from '@react-navigation/native'
import { Fader } from "react-native-ui-lib";
import { ColorPicker } from 'react-native-ui-lib';
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from './styles'
const QuoteDisplayComponent = ({navigation,quote,author,description,backgroundColor,backgroundImage,primaryTextColor,secondaryTextColor,displayMode}) => {
  const {colors}=useTheme()
  const [visible,setVisible]=useState(false)
     
  return (
    <ScrollView
        contentContainerStyle={{flexGrow:1, backgroundColor:backgroundColor, justifyContent: "space-around" }}
       
      >
        <TouchableWithoutFeedback  onPress={()=>{
          navigation.goBack()
        }} >
        <Ionicons style={{position:'absolute',top:0,left:0}} name="arrow-back-outline" size={30} color="#fff" />
        </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={()=>{
        setVisible(true)
      }}>
        <Ionicons style={{position:'absolute',top:0,right:0}} name="information-outline" size={30 } color="#fff" />
        </TouchableWithoutFeedback>
        
        <View style={{paddingVertical:20,justifyContent:'space-around'}}>
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
     
        <Modal
          animationType="slide"
          visible={visible}
          transparent={true}
          onRequestClose={() => {
            setVisible(false);
          }}
        >
          <View style={{flex:1, backgroundColor: colors.background,opacity:.9}}>
          <TouchableWithoutFeedback
            
            style={{ padding: 12 }}
            onPress={() => {
              setVisible(false);
            }}
          >
         <Ionicons name="arrow-back-outline" size={30} color="#fff" />
         
          </TouchableWithoutFeedback>
          <View
            style={{
             
              ...styles.infoTextContainer,
            }}
          >
            <Text style={{ color: colors.text, ...styles.infoPrimaryText }}>
              {description}
            </Text>
          </View>
          </View>
        </Modal>
        
      </ScrollView>
  )

}

export default QuoteDisplayComponent


/*

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
  */