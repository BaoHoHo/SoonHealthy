import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Components/HomeScreen";
import AboutScreen from "./Components/AboutScreen";

import OptionFemaleScreen from "./Components/OptionFemaleScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="OptionFemale" component={OptionFemaleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}