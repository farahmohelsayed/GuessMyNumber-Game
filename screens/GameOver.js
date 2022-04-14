import {
  Image,
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../utills/Colors";
const GameOver = ({ roundsNum, userInput, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 700) {
    imageSize = 150;
  }
  if (height < 450) {
    imageSize = 100;
  }
  const imageStyle = {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize/2,
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={([styles.imageContainer, imageStyle])}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNum}</Text>
         rounds to guess the number
        <Text style={styles.highlight}> {userInput}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </View>
  );
};
export default GameOver;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginVertical: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: "hidden",
    margin: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    margin: 16,
  },
  highlight: {
    color: Colors.primary700,
    fontFamily: "open-sans-bold",
  },
});
