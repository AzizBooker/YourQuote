import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import AppTitle from "../../components/AppTitle";
import CustomSwitch from "../../components/CustomSwitch";
import { useSelector,useDispatch } from "react-redux";
import { changeIsDarkMode } from "../../Redux/settingsSlice";
const SettingsScreen = () => {
  const { colors } = useTheme();
  const dispatch=useDispatch()
  return (
  
    <SafeAreaView style={{ margin: 12 }}>
      <AppTitle />
      <View>
        <CustomSwitch switchLabel='useDarkMode' onChange={(enabled)=>{dispatch(changeIsDarkMode(enabled))}}/>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
