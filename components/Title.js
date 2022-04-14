import { Text, StyleSheet } from "react-native";
const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};
export default Title;
const styles = StyleSheet.create({
  title: {
    borderWidth: 2,
    borderColor: "white",
    fontSize: 26,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    padding: 12,
  },
});
