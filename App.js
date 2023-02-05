import * as React from "react";
import { View, Text, StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Components/HomeScreen";
// import AboutScreen from "./Components/AboutScreen";
import OptionFemaleScreen from "./Components/OptionFemaleScreen";
import OptionMaleScreen from "./Components/OptionMaleScreen";
import CalendarScreen from "./Components/CalendarScreen";
import ContactCalendar from "./Components/ContactCalendar";

import { Calendar } from "react-native-calendars";

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
             
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* <Stack.Screen name="About" component={AboutScreen} /> */}
          <Stack.Screen name="Female" component={OptionFemaleScreen} />
          <Stack.Screen name="Male" component={OptionMaleScreen} />
          <Stack.Screen name="Period Date" component={CalendarScreen} />
          <Stack.Screen name="Contact Lenses Date" component={ContactCalendar} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

