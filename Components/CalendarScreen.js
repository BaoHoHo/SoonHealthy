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
        // for(let i = 1; i <= 10; i++) {
        // for (let year = startDate.getFullYear())
        for(let i = startDate.getDate(); i <= startDate.getDate() + 4; i++) {
            let day = i.toString().padStart(2, '0');
            let periods = [
                {
                startingDay: i == startDate.getDate(),
                endingDay: i  == startDate.getDate() + 4,
                color: 'teal',
                }
            ];
            // marked[`2022-${(startDate.getMonth + 1).toString().padStart(2, '0')}-${day}`] = {
            marked[`2022-12-${day}`] = {
                periods
            };
            // console.log(`Mark: ${(startDate.getMonth + 1)}`);
            console.log(`${startDate.getDate()}`);
        }
        return marked;
    };
   
    return (
        <View style={{marginTop: 50}}>
            <View style={styles.grid}>
                <Text>Start day: </Text>
                <RNDateTimePicker 
                    value={startDate}
                    // mode={mode}  
                    onChange={onChangeStart}
                    display="calendar" 
                    textColor="black"
                />
            </View>
            {/* <View style={styles.grid}>
                <Text>End day: </Text>
                <RNDateTimePicker 
                    value={endDate}
                    // mode={mode}
                    onChange={onChangeEnd}
                    display="calendar" 
                    textColor="black"
                />
            </View> */}
            <View>
                <Button title="Set"/>
            </View>
            
            {/* <Calendar
                markingType="multi-period"
                markedDates={{
                    '2023-02-22': {
                        periods: [
                            {startingDay: true, endingDay: false, color: '#ffd1dc'},
                        ]
                    },
                    '2023-02-25': {
                        periods: [
                            {startingDay: false, endingDay: true, color: '#ffd1dc'}
                        ]
                    }
                }}
            /> */}
            <Calendar
                initialDate="2022-12-01"
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