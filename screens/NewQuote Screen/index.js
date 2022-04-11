import { View, Text,TextInput,ScrollView } from 'react-native'
import React ,{useState,useEffect} from 'react'
import {useSelector,useDispatch } from 'react-redux'
import { useTheme } from '@react-navigation/native'
import styles from './styles'
import CustomButton from '../../components/CustomButton'
import { AddQuote,EditQuote } from '../../Redux/rootSlice'
import { v4 as uuidv4 } from 'uuid';
import Dropdown from '../../components/Dropdown'

const NewQuoteScreen = ({navigation,route}) => {



  const [quote,setQuote]=useState("")
  const [author,setAuthor]=useState("")
  const [description,setDescription]=useState("")
  const [dropdownValue,setDropdownValue]=useState(null)
  const [editing,setEditing]=useState(false)
  const [uuid,setUuid]=useState(uuidv4())
  useEffect(() => {
    
    if(route.params.editing==true){
      console.log(route.params)
      setQuote(route.params.quote)
      setAuthor(route.params.author)
      setDescription(route.params.description)
      setDropdownValue(route.params.collectionName)
      setEditing(false)
      setUuid(route.params.uuid)
    }
    
  }, [])
  
  

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
    editing ?   dispatch(EditQuote({quote,author,description,uuid,collection:dropdownValue})) : navigation.navigate('NewQuote2',{quote,author,description,uuid:uuidv4(),collection:dropdownValue})
    editing ? navigation.navigate('Quotes') : ""
  }



  
  return (
    <View style={styles.container}>
      <View>
        <Text style={{color:colors.text,...styles.text}}>{editing ? 'Edit your Quote' : 'Describe Your Quote'}</Text>
      
        <TextInput style={{color:colors.text,borderColor:colors.text,...styles.input}} placeholderTextColor={colors.card} value={author} onChangeText={setAuthor} placeholder="Author" />
        <TextInput style={{color:colors.text,borderColor:colors.text,...styles.input}} placeholderTextColor={colors.card} selectionColor={colors.primary} numberOfLines={4} value={quote} onChangeText={setQuote} placeholder="Quote" />
        <Dropdown value={dropdownValue} setValue={setDropdownValue} propItems={collectionsList} />
        <TextInput style={{color:colors.text,borderColor:colors.text,...styles.input}} placeholderTextColor={colors.card} multiline={true} numberOfLines={6} value={description} onChangeText={setDescription} placeholder="Description(Optional)" />
        
      </View>
      <View style={{ flexDirection:'row',justifyContent:'space-between'}}>
        <CustomButton  isSecondary label="Cancel" onPress={()=>{navigation.goBack()}}/>
        <CustomButton  label={(editing ? "Edit" : "Next")} onPress={onSubmit} />
      </View>
    </View>
  )
}

export default NewQuoteScreen