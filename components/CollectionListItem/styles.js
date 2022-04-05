import { StyleSheet } from 'react-native' 
 const styles = StyleSheet.create({
   container:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop:4,
    paddingBottom:8,
    borderBottomWidth:1
   },
      textHeader:{
        paddingVertical:0,
        marginVertical:0,
        fontFamily:'Inter_500Medium',
        fontSize:24,
      },
      textSubtitle:{
        paddingVertical:0,
        marginVertical:0,
        fontSize:16,
        fontFamily:'Inter_300Light',
        opacity:0.8,
      },
      textMenu:{
        
      },
      disabledTextMenu:{
        opacity:0.4
      }
    }); 
export default styles