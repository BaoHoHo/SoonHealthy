import React from "react";
import { View} from "react-native";
import { Calendar } from "react-native-calendars";

export default function CalendarScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Calendar/>
    </View>
  );
}