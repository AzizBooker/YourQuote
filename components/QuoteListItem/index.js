import { View, Text } from 'react-native'
import React ,{useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from '@react-navigation/native'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import styles from './styles'
//TODO 2C Create Pop Up Menu' 
// TODO 3 Pop Up Menu on Long Press and Trigger Press
//TODO 4 Option to View,Edit, or Delete Quote
const QuoteListItem = ({item,index,navigation,quotes}) => {
  const {colors} =useTheme()
  

  const quote=item.quote
  const author=item.author
  const uuid=item.uuid
  const collectionName=item.name.toLowerCase()
  const description=item.description
  const showAlert=()=>{

  
    Alert.alert(
      "Delete Collection?",
      `Do you wish to delete the collection ${collectionName}`,
      [
        {
          text: "No",
         
          style: "cancel",
        },
        {
            text:"Yes",
            onPress: () => { dispatch(DeleteCollection(uuid)) }
        }
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog."
          ),
      }
    );
  }
  const onView=()=>{

    navigation.navigate('DisplayQuote' ,{uuid,quote,author,collectionName,description,allQuotes:quotes,currentIndex:index})
  }

  return(
    
    <TouchableOpacity onPress={onView}>
    <View style={{marginBottom:12}}>
      <View style={{marginBottom:6}}>
      <Text style={{fontSize:14,color:colors.text,opacity:0.8}}>{collectionName}</Text>
      </View>
      <Text style={{fontSize:18,color:colors.text,fontFamily:'Inter_500Medium'}}>{quote}</Text>
      <Text style={{color:colors.text,opacity:0.8,marginTop:8,fontFamily:'Inter_300Light'}}>{author}</Text>
      
     
      <Menu >
          <MenuTrigger text="Select action" />
          <MenuOptions>
            <MenuOption onSelect={onView} ><Text style={styles.textMenu} >View</Text></MenuOption>
            <MenuOption onSelect={() => {navigation.navigate('NewQuote',{editing:true,collectionName,uuid,quote,author,description})}} ><Text style={styles.textMenu}>Edit</Text></MenuOption>
            <MenuOption onSelect={showAlert}  ><Text style={styles.textMenu}>Delete</Text></MenuOption>
            
          </MenuOptions>
     </Menu>
     <View style={{borderBottomColor:colors.text,borderBottomWidth:0.6,marginTop:10}}></View>
    
    </View>
    </TouchableOpacity>
    
  )
}

export default QuoteListItem