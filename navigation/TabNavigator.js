import { View,TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home Screen";
import RandomQuoteScreen from "../screens/RandomQuote Screen";
import QuoteScreen from "../screens/Quote Screen/index.";
import SettingsScreen from "../screens/Settings Screen";
import AddNewItemButton from "../components/AddNewItemButton";
import AddNewNavigator from "./AddNewNavigator";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from "react-redux";
const TabNavigator = () => {
    
    
const Tab=createBottomTabNavigator()

const DummyScreen=()=>{
  return null
}
const CreatNewPlaceholder=()=>{
  return(
    <View style={{color:"#f00",flex:1}}>
     
    </View>
  )
}

return (
    <Tab.Navigator screenOptions={({route})=>({
      headerShown:false,
      tabBarIcon:({focused,color,size})=>{
        let iconName;

        if(route.name==="Home"){
          iconName=focused ?'home' : 'home-outline'
        }
        else if(route.name==="Settings"){
          iconName= focused? 'settings' :'settings-outline'
        } 
        else if(route.name==="Create"){
          iconName='add-outline'
        }

        

        return <Ionicons name={iconName} size={20} color={color} />;
      }
      
    })}
      >
        <Tab.Screen name="Home" options={{headerShown:true,headerStyle:{backgroundColor:'#33A1AA'}}} component={HomeScreen} />
        <Tab.Screen name="Create" component={AddNewNavigator} 
        listeners={({navigation}) => ({
          
          tabPress:e=>{
          e.preventDefault()
            
         
          navigation.navigate('Choice')
    
          }
          
        })}
        />
      
        <Tab.Screen name="Settings" component={SettingsScreen}  options={{headerShown:true,headerStyle:{backgroundColor:'#33A1AA'}}} />
    </Tab.Navigator>
  )
}

export default TabNavigator

/*

        
  

listeners={{
          
          tabPress:e=>{
            e.preventDefault()
            console.warn('Press')
    
          }
          
        }}

      */