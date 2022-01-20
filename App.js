import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }

  // render GameScreen conditionally when button is selected

  return (
    <View style={styles.screen}>
      <Header title="Guess a number!" />
      {content}
    </View>
  );
}

// flex 1 ensure the view takes all the space it can get
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
