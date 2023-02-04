import React from "react";
import { Button, View, Text } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
      <Button
        title="Go to Option Female"
        onPress={() => navigation.navigate("OptionFemale")}
      />
      <Button
        title="Go to Option Male"
        onPress={() => navigation.navigate("OptionMale")}
      />
      <Button
        title="Go to Calendar"
        onPress={() => navigation.navigate("Calendar")}
      />
    </View>
  );
}