import React, { Component } from "react";
import { Button, View, Text } from "react-native";

export default function OptionFemaleScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Option Female Screen</Text>
      <Button
      //onPress={Contact}
      title="Contact Lenses"
      color="#5f9ea0"
      />

    </View>
  );
}