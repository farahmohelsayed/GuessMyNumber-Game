import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./utills/Colors";
import GameOver from "./screens/GameOver";
import {useFonts} from 'expo-font'
import { StatusBar } from "expo-status-bar";
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userInput, setUserInput] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundsNum,setRoundsNum] = useState(0)
 const[fontisLoaded] =  useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
  if(!fontisLoaded){
    return <AppLoading/>
  }
  const userInputConfirm = (input) => {
    setUserInput(input);
    setGameIsOver(false);
  };
  const gameOverHandler = (guessRounds) => {
    setGameIsOver(true);
    setRoundsNum(guessRounds)
  };
  const startNewGame=()=>{
    setUserInput(null)
    setRoundsNum(0)
  }
  let screen = <StartGameScreen userInputConfirm={userInputConfirm} />;
  if (userInput) {
    screen = <GameScreen GameIsOver={gameOverHandler} userInput={userInput} />;
  }
  if (userInput && gameIsOver) {
    screen = <GameOver userInput={userInput} roundsNum={roundsNum} onStartNewGame={startNewGame}/>;
  }
  return (
    <>
    <StatusBar style="light"/>
    <LinearGradient
      style={styles.container}
      colors={[Colors.primary400, Colors.accent600]}
    >
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
        source={require("./assets/dice.png")}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
