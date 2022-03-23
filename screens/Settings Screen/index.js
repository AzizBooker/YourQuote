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
  const isDarkMode=useSelector(state=>state.settings.isDarkMode)
  return (
  
    <SafeAreaView style={{ margin: 12 }}>
      <AppTitle />
      <View>
        <CustomSwitch switchLabel='useDarkMode' defaultValue={isDarkMode} onChange={(enabled)=>{dispatch(changeIsDarkMode(enabled))}}/>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
