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

    const month30 = [2,4,6,9,11]
    const month31 = [1,3,5,7.8,10,12]

    const getMarked = () => {
        let marked = {};
        let countDay = 0;
        let dayCondition = startDate.getDate() + 4;
        for(let yy = startDate.getFullYear(); yy <= startDate.getFullYear(); yy++) {
            let year = yy.toString().padStart(2, '0');
            for(let mm = startDate.getMonth() + 1; mm <= startDate.getMonth() + 1; mm++) {
                let month = mm.toString().padStart(2, '0');
                for(let dd = startDate.getDate(); dd <= dayCondition; dd++) {
                    let day = dd.toString().padStart(2, '0');

                    if (dd == 31)
                    {
                        if (month30.includes(mm))
                        {
                            dd = 1;
                            mm++;
                            dayCondition = 5 - countDay;
                        }
                    }
                    if (dd == 32)
                    {
                        if (month31.includes(mm))
                        {
                            dd = 1;
                            mm++;
                            dayCondition = 5 - countDay;
                        }
                    }

                    let periods = [
                        {
                        startingDay: dd == startDate.getDate(), 
                        endingDay: dd  == startDate.getDate() + 4,
                        color: '#ffd1dc',
                        }
                    ];

                    year = yy.toString().padStart(2, '0');
                    month = mm.toString().padStart(2, '0');
                    day = dd.toString().padStart(2, '0');

                    marked[`${year}-${month}-${day}`] = {
                        periods
                    };
                    console.log(`${year}-${month}-${day}`);
                    countDay++;
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
                    <View style={{marginTop: 50}}>
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
                            style={styles.roundButton}
                        >
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
    backgroundColor: '#fda39f',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: "#9e4244",
    fontFamily: 'Chalkduster',
    textAlign: 'center',
  }
})