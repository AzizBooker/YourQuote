import { StyleSheet,TextInput } from 'react-native' 
 const  styles = StyleSheet.create({
      container:{ 
          flex:1,
          justifyContent:'space-between',
          margin:12,
          paddingVertical:12
      },
      text:{
          fontSize:28
      },
      inputContainer:{
        marginTop:12
      },
      input: {
       
        marginVertical: 10,
        borderWidth: 1,
        borderRadius:4,
        paddingTop:2,
        paddingBottom:6,
        paddingHorizontal:6
      },
    });

export default styles;