import React, { Component } from "react";
import { StyleSheet, Button, View, Text, TouchableOpacity } from "react-native";

export default function OptionMaleScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      
      <View style={{marginVertical: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Calendar")}
          style={styles.roundSquare1}>
          <Text style={styles.textContact}>  Choose contact start date</Text>
        </TouchableOpacity>

      </View>
    </View>
    
    
  );
}

// Styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'right',
    alignItems: 'right',
  },
  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#ffd1dc',
  },
  roundSquare1: {
    width: 500,
    height: 70,
    backgroundColor: "#cadeed",
    justifyContent: 'center',
    borderRadius: 20,
  },

  textContact: {
    fontSize: 24,
    fontWeight: '400',
    color: "#194569",
    fontFamily: 'Chalkduster',
  },
});
