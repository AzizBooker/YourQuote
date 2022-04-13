import { View, Text,Button,TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator'
import BottomSheetComponent from '../components/BottomSheet'
import NewQuoteScreen from '../screens/NewQuote Screen'
import NewQuoteScreen2 from '../screens/NewQuoteScreen2'
import NewCollectionScreen from '../screens/NewCollection Screen'
import DisplayQuoteScreen from '../screens/DisplayQuote Screen'
import QuoteScreen from '../screens/Quote Screen/index.'
import { useSelector } from 'react-redux'
const RootNavigator = () => {
  const isDarkMode=useSelector(state=>state.settings.isDarkMode)
const Stack=createNativeStackNavigator()

  return (
    <Stack.Navigator
        screenOptions={{

        }}
    >
        <Stack.Screen name ="Tab" options={{headerShown:false}} component={TabNavigator}/>
        <Stack.Screen options={{presentation:"transparentModal",headerShown:false}} name="Choice"  component={BottomSheetComponent}/>
        <Stack.Screen name="NewQuote" options={{title:'',headerStyle:{backgroundColor:(isDarkMode ? '#333333' :'#FAF9F6')}}} component={NewQuoteScreen} />
        <Stack.Screen name="NewQuote2" options={{title:'',headerStyle:{backgroundColor:(isDarkMode ? '#333333' :'#FAF9F6')}}} component={NewQuoteScreen2} />
        <Stack.Screen name ="NewCollection"  options={{title:'',headerStyle:{backgroundColor:(isDarkMode ? '#333333' :'#FAF9F6')}}} component={NewCollectionScreen} />
        <Stack.Screen name="DisplayQuote" options={{headerShown:false}} component={DisplayQuoteScreen}  />
        <Stack.Screen name="Quotes" component={QuoteScreen} />
 
    </Stack.Navigator>
  )
}

export default RootNavigator