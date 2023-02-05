import React from "react";
import { Button, View, Text, StyleSheet, ImageBackground, TouchableOpacity} from "react-native";
//import style from '../Components/HomeScreen.css'

const image = {uri: 'https://www.dropbox.com/s/icy7b4yk37b8rz7/Portrait.jpg?dl=0'};
export default function HomeScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: "center"}}>
      <View>
        <ImageBackground source={image} style={style.image} >
        <Text style={style.text}>Welcome to SoonHealthy</Text>
      </ImageBackground>
        </View>
      <Text  style={{fontSize:20, justifyContent: "center", fontFamily:'Chalkduster'
}}> 
      What do you Identify as Biologically</Text>

      <View style={style.button}>
      <TouchableOpacity 
      onPress={() => navigation.navigate("FemaleOption")}
      >
          <Text style={style.buttonText}>Female</Text>
      </TouchableOpacity>
      </View>

      <View style={style.button}>
      <TouchableOpacity 
      onPress={() => navigation.navigate("MaleOption")}
      >
          <Text style={style.buttonText}>Male</Text>
      </TouchableOpacity>

      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    justifyContent: 'center',
  },
  text: {
    color: '#6D9197',
    fontSize: 20,
    lineHeight: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Zapfino',
    fontStyle: 'bold',
  },
  button: {
    fontSize: 17,
    padding: 12,
    flex: 0,
    backgroundColor: "#ffd1dc",
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,

    marginBottom: 20,
    padding: 30, 
    
  }, 
  buttonText: {
    fontSize:20, 
    justifyContent: "center", 
    color:'#A94064',
    fontFamily: 'Chalkduster',
  },
  
});