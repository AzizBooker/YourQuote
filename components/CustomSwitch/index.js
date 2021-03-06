
import { View, Text,Switch } from 'react-native';
import React , {useState} from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';


const CustomSwitch = ({switchLabel,onChange,defaultValue}) => {
  const [enabled,setEnabled]=useState(defaultValue)
  const {colors}=useTheme()

  const textPrimaryColor=colors.primary;

  const toggleSwitch=()=>{
    setEnabled(!enabled)
  }
  onChange(enabled)

  return (
    <View style={{flexDirection:'row', justifyContent:"space-between",alignItems:'center'}}>
      <Text style={{color:colors.text}}>{switchLabel} </Text>
      <Switch value={enabled} onValueChange={toggleSwitch} 
       trackColor={{ false: "#767577", true: "#ddd" }}   
        thumbColor={enabled ? textPrimaryColor : "#f4f3f4"} />
    </View>
  );
};

export default CustomSwitch
