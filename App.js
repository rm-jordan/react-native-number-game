import { StyleSheet, View } from "react-native";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a number!" />
    </View>
  );
}

// flex 1 ensure the view takes all the space it can get
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
