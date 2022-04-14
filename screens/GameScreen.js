import {
  StyleSheet,
  View,
  Text,
  Alert,
  FlatList,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/Title";
import Colors from "../utills/Colors";
import PrimaryButton from "../components/PrimaryButton";
import { useEffect } from "react";
import InstructionsText from "../components/InstructionText";
import GuessingLog from "../components/game/GuessingLog";

const generateRandomNumber = (min, max, exclude) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNum;
  }
};

let minBound = 1;
let maxBound = 100;
const GameScreen = ({ userInput, GameIsOver }) => {
  const initialGuess = generateRandomNumber(1, 100, userInput);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    if (currentGuess === userInput) {
      GameIsOver(guessRounds.length);
    }
  }, [currentGuess, userInput, GameIsOver]);
  useEffect(() => {
    (minBound = 1), (maxBound = 100);
  }, []);
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userInput) ||
      (direction === "greater" && currentGuess > userInput)
    ) {
      Alert.alert("DONT LIE", "You know this is not correct", [
        { text: "Fine", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBound = currentGuess;
    } else {
      minBound = currentGuess + 1;
    }
    const newRandomNum = generateRandomNumber(minBound, maxBound, currentGuess);
    setCurrentGuess(newRandomNum);
    setGuessRounds((prevGuess) => [newRandomNum, ...prevGuess]);
  };
  const guessRoundsLength = guessRounds.length;
  const marginDistance = height < 800 ? 30 : 100;
  let content = (
    <>
      <View style={styles.currentGuessContainer}>
        <Text style={styles.currentGuess}>{currentGuess}</Text>
      </View>
      <InstructionsText>Higher or lower?</InstructionsText>
      <View style={styles.directionButtons}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="remove" size={24} color="white" />
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="add-sharp" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>
    </>
  );
  if (width > 500) {
    content = (
      <>
        <View style={styles.wideContentContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.currentGuessContainer}>
          <Text style={styles.currentGuess}>{currentGuess}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add-sharp" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={[styles.screen, { marginTop: marginDistance }]}>
      <Title>Opponents Guess</Title>
      {content}
      <FlatList
        data={guessRounds}
        renderItem={(itemData) => (
          <GuessingLog
            roundNumber={guessRoundsLength - itemData.index}
            guess={itemData.item}
          />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};
export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
  currentGuessContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    marginTop:30,
    borderColor: Colors.accent600,
  },
  currentGuess: {
    fontSize: 32,
    paddingHorizontal: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.accent600,
  },
  directionButtons: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  wideContentContainer: {
    flexDirection:'row',
    margin:20
  },
});
