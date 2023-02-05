import React, { Component } from "react";
import { StyleSheet, Button, View, Text, TouchableOpacity, ImageBackground } from "react-native";


export default function OptionMaleScreen({navigation}) {
    const image = require( '../background_image/dot.png');
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={{marginVertical: 20}}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Calendar")}
                style={styles.roundSquare1}>
                <Text style={styles.textContact}>Choose contact lenses start date</Text>
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
    width: 410,
    height: 70,
    backgroundColor: "#cadeed",
    justifyContent: 'center',

    borderRadius: 20,
  },

  textContact: {

    fontSize: 18,
    fontWeight: '400',
    color: "#194569",
    fontFamily: 'Chalkduster',
    textAlign: "center"
  },
});
