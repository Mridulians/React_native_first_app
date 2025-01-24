import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";

// Prevent the splash screen from auto-hiding before we're ready
SplashScreen.preventAutoHideAsync();

export default function app() {
  useEffect(() => {
    const prepareApp = async () => {
      // Simulate loading or other async tasks
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Example delay
      await SplashScreen.hideAsync(); // Hide the native splash screen
    };

    prepareApp();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My First Blog and News App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
