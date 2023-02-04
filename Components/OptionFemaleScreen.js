import React, { Component } from "react";
import { StyleSheet, Button, View, Text, TouchableOpacity } from "react-native";

export default function OptionFemaleScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      
      <View style={{marginVertical: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Calendar")}
          style={styles.roundSquare1}>
          <Text style={styles.textContact}>  Choose contact start date</Text>
        </TouchableOpacity>
        
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("Calendar")}
          style={styles.roundButton1}>
          <Text style={styles.Rouge}>Add Date</Text>
        </TouchableOpacity> */}
      </View>
      
      <View style={{marginVertical: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Calendar")}
          style={styles.roundSquare2}>
          <Text style={styles.textPeriod}>  Choose period start date</Text>
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
  roundButton2: {
    marginTop: 20,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
  roundSquare1: {
    width: 500,
    height: 70,
    backgroundColor: "#ffd1dc",
    justifyContent: 'center',
    borderRadius: 20,
  },
  roundSquare2: {
    width: 500,
    height: 70,
    backgroundColor: "#fda39f",
    justifyContent: 'center',
    borderRadius: 20,
  },
  textContact: {
    fontSize: 24,
    fontWeight: '400',
    color: "#A94064",
    fontFamily: 'Chalkduster',
  },
  textPeriod: {
    fontSize: 24,
    fontWeight: '400',
    color: "#9e4244",
    fontFamily: 'Chalkduster'
  },
});
