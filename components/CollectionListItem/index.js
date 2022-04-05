import { View, Text, TouchableWithoutFeedback,Alert } from "react-native";
import React ,{useEffect, useState} from "react";
import { useTheme } from "@react-navigation/native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import {useSelector,useDispatch } from 'react-redux'
import { DeleteCollection } from "../../Redux/rootSlice";
import styles from "./styles";

const CollectionListItem = ({navigation, collectionName, quoteCount,uuid,allQuotes,disabled }) => {
  
  const { colors } = useTheme();
  const [quotes,setQuotes]=useState([])
  const [disabledMenu,setDisabledMenu]=useState(false)
  const dispatch=useDispatch()
  
 

  useEffect(() => {
    if(disabled!=null){
      setDisabledMenu(disabled)
  }
   setQuotes(allQuotes.map(quote=> quote={...quote,name:collectionName}))
   
   
    
  }, [])
  
  const showAlert=()=>{

  
  Alert.alert(
    "Delete Collection?",
    `Do you wish to delete this collection and all its quotes?`,
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
  quotesArray=[...quotes]
  
  navigation.navigate('Quotes',{name:collectionName})
}
  return (
    <TouchableWithoutFeedback
      onPress={onView}
    >
      <View style={{...styles.container,borderBottomColor:colors.text}}>
        <View>
          <Text style={{ color: colors.text, ...styles.textHeader }}>
            {collectionName}
          </Text>
          <Text style={{ color: colors.text, ...styles.textSubtitle }}>
            {quoteCount} quotes
          </Text>
        </View>
        <Menu>
          <MenuTrigger text="Select action" />
          <MenuOptions>
            <MenuOption onSelect={onView} ><Text style={styles.textMenu} >View</Text></MenuOption>
            <MenuOption disabled={disabledMenu} onSelect={() => {navigation.navigate('NewCollection',{editing:true,collectionName,uuid})}} ><Text style={(disabledMenu ? styles.disabledTextMenu : styles.textMenu)}>Edit</Text></MenuOption>
            <MenuOption  disabled ={disabledMenu} onSelect={showAlert}  ><Text style={(disabledMenu ? styles.disabledTextMenu : styles.textMenu)}>Delete</Text></MenuOption>
            
          </MenuOptions>
        </Menu>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CollectionListItem;

//<TouchableWithoutFeedback onPress={()=>{console.log('press')}} style={{color:'#fff',width:10,height:10}}><Text style={{color:'#fff'}}>Test</Text></TouchableWithoutFeedback>
