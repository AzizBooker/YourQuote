import { View, Text, SafeAreaView,TouchableOpacity } from "react-native";
import React ,{useEffect} from "react";
import { useTheme } from "@react-navigation/native";
import AppTitle from "../../components/AppTitle";
import CustomSwitch from "../../components/CustomSwitch";
import { useSelector,useDispatch } from "react-redux";
import { changeIsDarkMode } from "../../Redux/settingsSlice";
import { AdMobBanner,setTestDeviceIDAsync } from "expo-ads-admob";
const SettingsScreen = () => {
  const { colors } = useTheme();
  const dispatch=useDispatch()
  const isDarkMode=useSelector(state=>state.settings.isDarkMode)
  useEffect(() => {
    
    setTestDeviceIDAsync('EMULATOR')
     
    }, )
  return (
  
    <SafeAreaView style={{flex:1, margin: 12 }}>
      <View>  
        <CustomSwitch switchLabel='useDarkMode' defaultValue={isDarkMode} onChange={(enabled)=>{dispatch(changeIsDarkMode(enabled))}}/>
      <TouchableOpacity onPress={()=>console.warn('Remove Ads')}>
        <Text style={{color:colors.text}}>Remove Ads</Text>
        </TouchableOpacity>
      </View> 
        <AdMobBanner 
        style={{position:"absolute",bottom:0}}
        bannerSize="smartBanner"
        adUnitID="ca-app-pub-3169309057668103/2009482402"
        servePersonalizedAds={true}
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
      />
      
    </SafeAreaView>
  );
};

export default SettingsScreen;
