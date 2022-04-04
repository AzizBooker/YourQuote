import { View, Text,Button,TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator'
import BottomSheetComponent from '../components/BottomSheet'
import NewQuoteScreen from '../screens/NewQuote Screen'
import NewCollectionScreen from '../screens/NewCollection Screen'
import DisplayQuoteScreen from '../screens/DisplayQuote Screen'
import QuoteScreen from '../screens/Quote Screen/index.'
const RootNavigator = () => {

const Stack=createNativeStackNavigator()

  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
            presentation:'modal'
        }}
    >
        <Stack.Screen name ="Tab" component={TabNavigator}/>
        <Stack.Screen options={{presentation:"transparentModal"}} name="Choice" component={BottomSheetComponent}/>
        <Stack.Screen name="NewQuote" component={NewQuoteScreen} />
        <Stack.Screen name ="NewCollection" component={NewCollectionScreen} />
        <Stack.Screen name="DisplayQuote" component={DisplayQuoteScreen}  />
        <Stack.Screen name="Quotes" component={QuoteScreen} />
 
    </Stack.Navigator>
  )
}

export default RootNavigator