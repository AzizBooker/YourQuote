import { View, Text } from 'react-native'
import React ,{useState} from 'react'
import { useTheme } from "@react-navigation/native";
import DropDownPicker from 'react-native-dropdown-picker'

const Dropdown = ({propItems,value,setValue}) => {

    const [open,setOpen]=useState(false)
  
    const [items,setItems]=useState(propItems)
    const {colors}=useTheme()

    
  return (
      <View style={{marginVertical:4}}>
    <DropDownPicker
        style={{
        backgroundColor: colors.background,
        borderColor:colors.text,
        borderRadius:4
          }}
          textStyle={{
              color:colors.card
          }}
          labelStyle={{
            color:colors.text
          }}
         
        open={open}
        setOpen={setOpen}
        value={value}
        setValue={setValue}
        items={items}
        setItems={setItems}
    />
</View>
  )
}

export default Dropdown