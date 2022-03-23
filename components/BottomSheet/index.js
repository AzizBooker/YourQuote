import { View, Text,Button } from 'react-native'
import React from 'react'

const BottomSheetComponent = ({navigation}) => {
  console.log(navigation)
  return (
    <View style={{flex:1,justifyContent:'flex-end'}}>
            <Button title="Quote" onPress={()=>navigation.navigate('NewQuote')} />
            <Button title="Collection"/>
        </View>
  )
}

export default BottomSheetComponent