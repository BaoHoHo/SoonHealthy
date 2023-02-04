import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <View>
      <View style={{margin:50}}>
        <Button title="New Task"></Button>
      </View>
    </View>
    )
  }
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}