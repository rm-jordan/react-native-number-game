import React from "react";

import { View, Text, StyleSheet } from "react-native";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
};

const GameScreen = (props) => {};

const styles = StyleSheet.create({});

export default GameScreen;
