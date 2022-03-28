import { View, Text,TextInput } from 'react-native'
import React ,{useState} from 'react'
import styles from './styles'
import { useTheme } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import CustomButton from '../../components/CustomButton'
import { AddCollection } from '../../Redux/rootSlice'
import { v4 as uuidv4 } from 'uuid';
// TODO 2 Add New Collection on Form Press
const NewCollectionScreen = ({navigation}) => {
  const {colors} =useTheme()
  const [name, setName] = useState('')
  const dispatch=useDispatch()
  const onSubmit=()=>{
    dispatch(AddCollection({name,uuid:uuidv4()}))
    navigation.navigate('Tab')
  }
  return (
    <View style={styles.container}>
      <View>
       <Text style={{color:colors.text,...styles.text}}>Describe your Collection</Text>
       <View style={styles.inputContainer}>
      <TextInput style={{color:colors.text,borderColor:colors.text,...styles.input}} placeholderTextColor={colors.card} value={name} onChangeText={setName} placeholder="Name" />
      </View>
      </View>
      <View style={{ flexDirection:'row',justifyContent:'space-between'}}>
        <CustomButton  isSecondary label="Cancel" onPress={()=>{navigation.goBack()}}/>
        <CustomButton  label="Create" onPress={onSubmit} />
      </View>
    </View>
  )
}

export default NewCollectionScreen