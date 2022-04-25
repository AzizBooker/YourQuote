import { StyleSheet } from 'react-native' 
 const styles = StyleSheet.create({
      container:{ 
      },
      textQuote:{
        fontSize: 30,
        textAlign: "left",
        fontFamily: "Inter_500Medium",
      },
      textAuthor:{
     
        fontSize: 18,
        textAlign: "right",
        marginTop: 10,
        position:'relative',
        bottom:0
      },
      
  infoTextContainer: {
    flex: 1,
    marginHorizontal: 12,
    
    justifyContent: "space-around",
    alignContent: "center",
  },
  infoPrimaryText: {
    opacity: 1,
    textAlign: "left",
    marginBottom: 30,
    fontSize: 24,
  },
  infoSecondaryText: {
    opacity: 0.8,
    textAlign: "left",

    fontSize: 18,
  },
    }); 
export default styles