import { View, Text,Alert,TouchableOpacity } from 'react-native'
import React ,{useState} from 'react'

import { useTheme } from '@react-navigation/native'
import { DeleteQuote } from '../../Redux/rootSlice'
import { useDispatch } from 'react-redux'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import styles from './styles'

const QuoteListItem = ({item,index,navigation,quotes}) => {
  const {colors} =useTheme()
  const dispatch=useDispatch()

  const quote=item.quote
  const author=item.author
  const uuid=item.uuid
  const collectionName=item.name.toLowerCase()
  const description=item.description
  const backgroundColor=item.backgroundColor
  const backgroundImage=item.backgroundImage
  const primaryTextColor=item.primaryTextColor
  const secondaryTextColor=item.secondaryTextColor
  console.log(quotes)
  const showAlert=()=>{
      
  
    Alert.alert(
      "Delete Quote?",
      `Do you wish to delete this quote by ${author}`,
      [
        {
          text: "No",
         
          style: "cancel",
        },
        {
            text:"Yes",
            onPress: () => { dispatch(DeleteQuote({uuid,collectionName}))}
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

    navigation.navigate('DisplayQuote' ,{uuid,quote,author,collectionName,description,allQuotes:quotes,currentIndex:index,
      backgroundColor,primaryTextColor,secondaryTextColor})
  }

  return(
    
    <TouchableOpacity onPress={onView}>
    <View style={{marginBottom:12}}>
      <View style={{marginBottom:6}}>
      <Text style={{fontSize:14,color:colors.text,opacity:0.8}}>{collectionName}</Text>
      </View>
      <Text numberOfLines={3} style={{fontSize:18,color:colors.text,fontFamily:'Inter_500Medium',}}>{quote}</Text>
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