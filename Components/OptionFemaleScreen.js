import React, { Component } from "react";
import { StyleSheet, Button, View, Text, TouchableOpacity, ImageBackground } from "react-native";

export default function OptionFemaleScreen({navigation}) {
  const image = require( '../background_image/dot.png');
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}> 
          <View style={{marginVertical: 20}}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Calendar")}
              style={styles.roundSquare1}>
              <Text style={styles.textContact}>Choose contact start date</Text>
            </TouchableOpacity>
          </View>
          
          <View style={{marginVertical: 20}}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Calendar")}
              style={styles.roundSquare2}>
              <Text style={styles.textPeriod}>Choose period start date</Text>
            </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
    </View>
    
    
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
      flex: 1,
      justifyContent: 'center',
  },
  roundSquare1: {
    width: 400,
    height: 70,
    backgroundColor: "#ffd1dc",
    justifyContent: 'center',
    borderRadius: 20,
  },
  roundSquare2: {
    width: 400,
    height: 70,
    backgroundColor: "#fda39f",
    justifyContent: 'center',
    borderRadius: 20,
  },
  textContact: {
    fontSize: 20,
    fontWeight: '400',
    color: "#A94064",
    fontFamily: 'Chalkduster',
    textAlign: 'center',
  },
  textPeriod: {
    fontSize: 20,
    fontWeight: '400',
    color: "#9e4244",
    fontFamily: 'Chalkduster',
    textAlign: 'center',
  },

  
});
