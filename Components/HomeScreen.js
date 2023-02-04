import React from "react";
import { Button, View, Text, StyleSheet, ImageBackground} from "react-native";
//import style from '../Components/HomeScreen.css'

const image = {uri: 'https://www.dropbox.com/s/rh0f6o4egadccsk/wallpaper1.webp?dl=0'};
export default function HomeScreen({ navigation }) {
  
  return (
    
    <View style={{ flex: 1, alignItems: "center"}}>

      <ImageBackground source={image} style={style.image} >
      <Text style={style.text}>Welcome to SoonHealthy</Text>
      </ImageBackground>
      <Text  style={{fontSize:20, justifyContent: "center"}}> What do you Identify as Biologically</Text>
      <Button
        title="Male"
        onPress={() => navigation.navigate("About")}
      />
      <Button
        title="Female"
        onPress={() => navigation.navigate("OptionFemale")}
      />
      
      
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
});