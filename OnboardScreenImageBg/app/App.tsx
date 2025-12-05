import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import OnboardScreen from "../components/OnboardScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <OnboardScreen />
    </SafeAreaProvider>
  );
}
