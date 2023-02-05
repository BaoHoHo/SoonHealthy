import React from "react";
import { Button, View, Text, StyleSheet, ImageBackground, TouchableOpacity} from "react-native";
//import style from '../Components/HomeScreen.css'
import DefaultImage from '../assets/img/wallpaper.jpg';


export default function HomeScreen({ navigation }) {
  const image2 =require('../assets/img/wallpaper.jpg');
  return (
      <View style = {StyleSheet.container}>
      <ImageBackground source={image2} resizeMode="cover" style={style.image}>
        <View style={{alignItems: "center"}}>
        <Text style={style.text}>Welcome to SoonHealthy</Text>
        
        
        <Text  style={{fontSize:20, alignItems: "center", fontFamily:'Chalkduster', marginVertical:30
      }}> 
        What do you Identify as Biologically</Text>
  
        <View style={style.buttonFemale}>
        <TouchableOpacity 
        onPress={() => navigation.navigate("OptionFemale")}
        >

          <Text style={style.buttonTextFemale}>Female</Text>
        </TouchableOpacity>
        </View>
  
        <View style={style.buttonMale}>
        <TouchableOpacity 
        onPress={() => navigation.navigate("OptionMale")}
        >
            <Text style={style.buttonTextMale}>Male</Text>
        </TouchableOpacity>
  
        </View>
        </View>
      </ImageBackground>
      </View>
      
    
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  headerImage: {
    borderRadius: 11/2,
    paddingVertical: 20,

  },
  image: {
    alignItem: "center",
    height: 900,
  },
  text: {
    color: '#6D9197',
    fontSize: 40,
    lineHeight: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Chalkduster',
    fontStyle: 'bold',

    marginVertical:20,
    borderColor: 'white',
   // backgroundColor: 'white',
    underlayColor: "white",
    borderWidth: 2,
    borderRadius: 200/3,
    padding: 16,
  },
  buttonFemale: {
    fontSize: 17,
    backgroundColor: "#ffd1dc",
    elevation: 10,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItem: 'center',
    marginVertical:20,
  }, 

  buttonMale: {
    fontSize: 17,
    backgroundColor: "#194569",
    elevation: 10,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItem: 'center',
    marginVertical:20,
  }, 
  buttonTextFemale: {
    fontSize:20, 
    justifyContent: "center", 
    color:'#A94064',
    fontFamily: 'Chalkduster',
  },
  buttonTextMale: {
    fontSize:20, 
    justifyContent: "center", 
    color:'#cadeed',
    fontFamily: 'Chalkduster',
  },
  
  
});