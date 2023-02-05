import React, { useState } from "react";
import {Button, ImageBackground, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Calendar } from "react-native-calendars";
import RNDateTimePicker from "@react-native-community/datetimepicker";



export default function CalendarScreen() {
    const image = require( '../background_image/dot.png');
    const [startDate, setStartDate] = useState(new Date());

    const onChangeStart = (event, selectedDate) => {
        const currentStartDate = selectedDate || startDate;
        setStartDate(currentStartDate);
    }

    const getMarked = () => {
        let marked = {};
        for(let yy = startDate.getFullYear(); yy <= startDate.getFullYear(); yy++) {
            let year = yy.toString().padStart(2, '0');
            for(let mm = startDate.getMonth() + 1; mm <= startDate.getMonth() + 1; mm++) {
                let month = mm.toString().padStart(2, '0');
                for(let dd = startDate.getDate(); dd <= startDate.getDate() + 29; dd++) {
                    let day = dd.toString().padStart(2, '0');
                    let periods = [
                        {
                        startingDay: dd == startDate.getDate(), 
                        endingDay: dd  == startDate.getDate() + 29,
                        color: '#ffd1dc',
                        }
                    ];
                    marked[`${year}-${month}-${day}`] = {
                        periods
                    };
                    // console.log(`${year}-${month}-${day}`);
                }
            }
        }
        return marked;
    };
   
    return (
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}> 
                <View style={{marginVertical: 20}}>
                    <View style={{marginVertical: 50}}>
                        <View style={styles.grid}>
                            <Text style={styles.text}>Start day: </Text>
                            <RNDateTimePicker 
                                value={startDate} 
                                onChange={onChangeStart}
                                display="calendar" 
                                textColor="black"
                            />
                        </View>
                        <View style={{marginVertical: 60}}>
                        <Calendar
                            initialDate={startDate.toString()}  
                            markingType="multi-period"
                            markedDates={getMarked()}
                        />
                    </View>
                    </View>

                    <View style={styles.screen}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Calendar")}
              style={styles.roundButton}>
              <Text style={styles.text}>Confirm</Text>
            </TouchableOpacity>
      </View>

        </View>
    </View>
    </ImageBackground>
    </View>
    );
}

const styles = StyleSheet.create({
    grid:{
    
    paddingLeft: 10,  
    flexDirection: "row", 
    alignSelf:"center",
 },
 container: {
    flex: 1,
  },
  image: {
      flex: 1,
      justifyContent: 'center',
  },
  roundButton: {
    width: 150,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 100,
    backgroundColor: '#ddead1',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: "#4b6043",
    fontFamily: 'Chalkduster',
    textAlign: 'center',
  }
})