import React from "react";
import { Button, View, Text } from "react-native";
import { Calendar } from "react-native-calendars";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Calendar/>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
      <Button
        title="Go to Option Female"
        onPress={() => navigation.navigate("OptionFemale")}
      />
    </View>
  );
}