import { View,TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home Screen";
import RandomQuoteScreen from "../screens/RandomQuote Screen";
import QuoteScreen from "../screens/Quote Screen/index.";
import SettingsScreen from "../screens/Settings Screen";
import AddNewItemButton from "../components/AddNewItemButton";



const RootNavigator = () => {
    
    
const Tab=createBottomTabNavigator()

const DummyScreen=()=>{
  return null
}


return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      }}
      
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Quote" component={QuoteScreen} />
        <Tab.Screen name="AddNew" component={DummyScreen} 
        listeners={{
          tabPress:e=>{
            e.preventDefault()
            console.warn('Press')
    
          }
        }}
        options={{
          showLabel:false
        }}
        />
        
        <Tab.Screen name="RandomQuote" component={RandomQuoteScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default RootNavigator