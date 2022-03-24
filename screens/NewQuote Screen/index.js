import { View, Text,TextInput,ScrollView } from 'react-native'
import React ,{useState} from 'react'
import {useSelector,useDispatch } from 'react-redux'
import { useTheme } from '@react-navigation/native'
import styles from './styles'
import CustomButton from '../../components/CustomButton'
import { AddQuote } from '../../Redux/rootSlice'
import { v4 as uuidv4 } from 'uuid';
import Dropdown from '../../components/Dropdown'
//TODO 1 Add New Quote on Form Entry
const NewQuoteScreen = ({navigation}) => {

  const [quote,setQuote]=useState("")
  const [author,setAuthor]=useState("")
  const [description,setDescription]=useState("")
  const [dropdownValue,setDropdownValue]=useState(null)

  const dispatch=useDispatch()
  const {colors} =useTheme()
  const collections = useSelector((state) => state.root.collections);
  var collectionsList= []
  collectionsList=collections.map((collection)=>{
    var name=collection.name
      return ({
      label:name,
      value:name,
    }
      )
  })


  const onSubmit=()=>{
    dispatch(AddQuote({quote,author,description,uuid:uuidv4(),collection:dropdownValue}))
    navigation.navigate('Tab')
  }



  
  return (
    <View style={styles.container}>
      <View>
        <Text style={{color:colors.text,...styles.text}}>Describe your Quote</Text>
      
        <TextInput style={{color:colors.text,borderColor:colors.text,...styles.input}} placeholderTextColor={colors.card} value={author} onChangeText={setAuthor} placeholder="Author" />
        <TextInput style={{color:colors.text,borderColor:colors.text,...styles.input}} placeholderTextColor={colors.card} selectionColor={colors.primary} numberOfLines={4} value={quote} onChangeText={setQuote} placeholder="Quote" />
        <Dropdown value={dropdownValue} setValue={setDropdownValue} propItems={collectionsList} />
        <TextInput style={{color:colors.text,borderColor:colors.text,...styles.input}} placeholderTextColor={colors.card} multiline={true} numberOfLines={6} value={description} onChangeText={setDescription} placeholder="Description(Optional)" />
        
      </View>
      <View style={{ flexDirection:'row',justifyContent:'space-between'}}>
        <CustomButton  isSecondary label="Cancel" onPress={()=>{console.warn('Cancel Pressed')}}/>
        <CustomButton  label="Create" onPress={onSubmit} />
      </View>
    </View>
  )
}

export default NewQuoteScreen