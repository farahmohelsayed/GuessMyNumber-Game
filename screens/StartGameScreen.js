import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../utills/Colors";
import InstructionsText from "../components/InstructionText";
const StartGameScreen = ({ userInputConfirm }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const handleNumberInput = (input) => {
    setEnteredNumber(input);
  };
  const handleReset = () => {
    setEnteredNumber("");
  };
  const handleConfirm = () => {
    const number = parseInt(enteredNumber);
    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert("Invalid Input", "Check the entered number is within 0-99", [
        { text: "Okay", style: "destructive", onPress: handleReset },
      ]);
      return;
    }
    userInputConfirm(number);
  };

  return (
    <ScrollView style={Styles.screen}>
      <KeyboardAvoidingView style={Styles.screen} behavior="position">
        <View style={Styles.rootContainer}>
          <Title>Guess my number</Title>
          <View style={Styles.inputArea}>
            <InstructionsText>Enter a number</InstructionsText>
            <TextInput
              style={Styles.inputField}
              keyboardType="number-pad"
              autoCorrect={false}
              maxLength={2}
              onChangeText={handleNumberInput}
              value={enteredNumber}
            />
            {/* maxLength={2} because we want to pass number not string  */}
            <View style={Styles.buttons}>
              <View style={Styles.buttonContainer}>
                <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
              </View>
              <View style={Styles.buttonContainer}>
                <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
export default StartGameScreen;
const deviceWidth = Dimensions.get("window").width;
const Styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  rootContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  inputArea: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary500,
    marginTop: 40,
    marginHorizontal: 25,
    borderRadius: 6,
    padding: 20,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
  },
  inputField: {
    height: 50,
    fontSize: deviceWidth > 360 ? 32 : 28,
    marginVertical: 10,
    borderBottomColor: Colors.accent600,
    color: Colors.accent600,
    borderBottomWidth: 2,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
