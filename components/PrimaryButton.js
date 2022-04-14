import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../utills/Colors";

const PrimaryButton = ({ children, onPress }) => {

  return (
    <View style={styles.buttonOuter}>
      <Pressable
        style={({pressed})=> pressed? [styles.pressed,styles.buttonInner]: styles.buttonInner}
        android_ripple={{ color: Colors.primary700 }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};
export default PrimaryButton;
const styles = StyleSheet.create({
  buttonOuter: {
    borderRadius: 20,
    margin:16,
    overflow:'hidden',
    elevation:10,
    shadowColor:'black',
    shadowOffset:{width:0,  height:2},
    shadowOpacity:0.3,
    shadowRadius:6,
  },
  buttonInner: {
    padding:16,
    backgroundColor:Colors.primary600 ,
  },
  buttonText: {
    textAlign: "center",
    color:'#fff'
  },
  pressed:{
    opacity:0.75,
  }
});
