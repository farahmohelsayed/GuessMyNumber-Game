import { Text, View, StyleSheet } from "react-native";
import Colors from "../../utills/Colors";
const GuessingLog = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponents guess: {guess}</Text>
    </View>
  );
};
export default GuessingLog;
 const styles = StyleSheet.create({
     listContainer:{
         flexDirection:'row',
         justifyContent:'space-between',
         borderColor:Colors.primary700,
         borderWidth:1,
         borderRadius:40,
         padding:20,
         margin:10,
         
     },
     itemText:{
         fontFamily:'open-sans',
         fontSize:16
     }
 })