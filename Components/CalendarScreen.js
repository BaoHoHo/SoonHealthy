import React, { useState } from "react";
import {Button, Platform, View, Text, StyleSheet} from "react-native";
import { Calendar } from "react-native-calendars";
import RNDateTimePicker from "@react-native-community/datetimepicker";



export default function CalendarScreen() {

    const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(new Date());
    // const [mode, setMode] = useState('date');
    // const [show, setShow] = useState(false);
    const [text, setText] = useState(new Date().toString());

    const onChangeStart = (event, selectedDate) => {
        const currentStartDate = selectedDate || startDate;
        setStartDate(currentStartDate);
        let tempDate = new Date(currentStartDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        console.log(fDate);
        setText(fDate);
    }

    // const onChangeEnd = (event, selectedDate) => {
    //     const currentEndDate = selectedDate || endDate;
    //     setEndDate(currentEndDate);

    //     let tempDate = new Date(currentEndDate);
    //     let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    //     console.log(fDate);
    //     setText(fDate);
    // }

    const getMarked = () => {
        let marked = {};
        for(let yy = startDate.getFullYear(); yy <= startDate.getFullYear(); yy++) {
            let year = yy.toString().padStart(2, '0');
            for(let mm = startDate.getMonth() + 1; mm <= startDate.getMonth() + 1; mm++) {
                let month = mm.toString().padStart(2, '0');
                for(let dd = startDate.getDate(); dd <= startDate.getDate() + 4; dd++) {
                    let day = dd.toString().padStart(2, '0');
                    let periods = [
                        {
                        startingDay: dd == startDate.getDate(), 
                        endingDay: dd  == startDate.getDate() + 4,
                        color: '#ffd1dc',
                        }
                    ];
                    marked[`${year}-${month}-${day}`] = {
                        periods
                    };
                    console.log(`${year}-${month}-${day}`);
                }
            }
        }
        return marked;
    };
   
    return (
        <View style={{marginTop: 50}}>
            <View style={styles.grid}>
                <Text style={{fontSize:20}}>Start day: </Text>
                <RNDateTimePicker 
                    value={startDate} 
                    onChange={onChangeStart}
                    display="calendar" 
                    textColor="black"
                />
                <Button title="Set"/>
            </View>
            <Calendar
                initialDate={startDate}  
                markingType="multi-period"
                markedDates={getMarked()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    grid:{
    
    paddingLeft: 10,  
    flexDirection: "row", 
    alignSelf:"center",
 },
})