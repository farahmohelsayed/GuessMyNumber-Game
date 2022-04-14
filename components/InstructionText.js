import {Text, StyleSheet} from "react-native";
import Colors from "../utills/Colors";
const InstructionsText = ({ children }) => {
  return <Text style={styles.instructionsText}>{children}</Text>;
};
export default InstructionsText;
 
const styles = StyleSheet.create({
    instructionsText:{
        color:Colors.accent600,
        fontSize:32,
        fontFamily:'open-sans',
        textAlign:'center',
        marginVertical:10
      },
})