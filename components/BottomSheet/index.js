import { View, Text,Button,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'
const BottomSheetComponent = ({navigation}) => {

  return (
    <View style={{flex:1,justifyContent:'flex-end'}}>
      <TouchableWithoutFeedback style={{height:20,backgroundColor:"#fff"}}>
        <View>
            <CustomButton  label="Quote" onPress={()=>navigation.navigate('NewQuote')} />
            <CustomButton label="Collection" onPress={()=>navigation.navigate('NewCollection')}/>
          </View>
        </TouchableWithoutFeedback>
        </View>
  )
}

export default BottomSheetComponent