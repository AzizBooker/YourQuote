import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const CustomButton = ({ isSecondary, onPress, label }) => {
  const { colors } = useTheme();



  var currentStyle = {};
  var currentTextStyle={}
  const secondaryStyles = {
    borderRadius: 4,
    borderColor: colors.primary,
    borderWidth: 1,
    padding: 6,
  };
  const secondaryTextStyles = {
    color: colors.primary,
    padding: 4,
  };
  const primaryStyles = {
    borderRadius: 4,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    borderWidth: 1,
    padding: 6,
  };
  const primaryTextStyles = {
    color: colors.text,
    fontWeight: "bold",
    padding: 4,
  };

if(isSecondary==undefined || isSecondary==null){
    currentStyle=primaryStyles
    currentTextStyle=primaryTextStyles

}else{
    currentStyle=secondaryStyles
    currentTextStyle=secondaryTextStyles
}

  return (
    <View style={{margin:4}}>
      <TouchableOpacity onPress={onPress} style={{ ...currentStyle }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ ...currentTextStyle }}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
