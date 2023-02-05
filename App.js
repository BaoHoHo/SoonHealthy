import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Components/HomeScreen";
import FemaleOption from "./Components/FemaleOption";

import MaleOption from "./Components/MaleOption";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FemaleOption" component={FemaleOption} />
        <Stack.Screen name="MaleOption" component={MaleOption} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}