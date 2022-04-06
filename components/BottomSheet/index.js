import { View, Text,Button,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'
//TODO 6 Replace BottomSheet With Action sheet
const BottomSheetComponent = ({navigation}) => {

  return (
    <View style={{flex:1,justifyContent:'flex-end'}}>
      <TouchableWithoutFeedback style={{height:20,backgroundColor:"#fff"}}>
        <View>
            <CustomButton  label="Quote" onPress={()=>navigation.navigate('NewQuote',{editing:false})} />
            <CustomButton label="Collection" onPress={()=>navigation.navigate('NewCollection',{editing:false})}/>
          </View>
        </TouchableWithoutFeedback>
        </View>
  )
}

export default BottomSheetComponent