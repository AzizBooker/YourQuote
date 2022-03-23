import { View, Text,Button,TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator'
import BottomSheetComponent from '../components/BottomSheet'
import NewQuoteScreen from '../screens/NewQuote Screen'
import NewCollectionScreen from '../screens/NewCollection Screen'
const RootNavigator = () => {

const Stack=createNativeStackNavigator()

  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
    >
        <Stack.Screen name ="Tab" component={TabNavigator}/>
        <Stack.Screen options={{presentation:"transparentModal"}} name="Choice" component={BottomSheetComponent}/>
        <Stack.Screen name="NewQuote" component={NewQuoteScreen} />
        <Stack.Screen name ="NewCollection" component={NewCollectionScreen} />
 
    </Stack.Navigator>
  )
}

export default RootNavigator