import React, { useState } from "react";
import {Alert, Modal, Pressable, ImageBackground, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Calendar } from "react-native-calendars";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import isLeapYear from 'leap-year';



export default function CalendarScreen() {
    const image = require( '../background_image/dot.png');

    const [modalVisible, setModalVisible] = useState(false);

    const [startDate, setStartDate] = useState(new Date());

    const onChangeStart = (event, selectedDate) => {
        const currentStartDate = selectedDate || startDate;
        setStartDate(currentStartDate);
    }

    const month30 = [4,6,9,11]
    const month31 = [1,3,5,7,8,10,12]

    const getMarked = () => {
        let marked = {};
        let countDay = 0;
        let monthCondition = startDate.getMonth() + 1;
        let dayCondition = startDate.getDate() + 4;
        for(let yy = startDate.getFullYear(); yy <= startDate.getFullYear(); yy++) {
            let year = yy.toString().padStart(2, '0');
            for(let mm = startDate.getMonth() + 1; mm <= monthCondition; mm++) {
                let month = mm.toString().padStart(2, '0');
                for(let dd = startDate.getDate(); dd <= dayCondition; dd++) {
                    let day = dd.toString().padStart(2, '0');

                    if (dd == 31)
                    {
                        if (month30.includes(mm))
                        {
                            if (mm == 12){
                                mm = 1;
                                yy++;
                            }
                            else {
                                mm++;
                            }
                            dd = 1;

                            dayCondition = 5 - countDay;
                            monthCondition = 1;
                        }
                    }
                    if (dd == 32)
                    {
                        if (month31.includes(mm))
                        {
                            if (mm == 12){
                                mm = 1;
                                yy++;
                            }
                            else {
                                mm++;
                            }
                            dd = 1;
                           
                            dayCondition = 5 - countDay;
                            monthCondition = 1;
                        }
                    }
                    if (mm == 2)
                    {
                        if ((isLeapYear(yy + 2000) && dd == 30) || (!isLeapYear(yy + 2000) && dd == 29))
                        {
                            mm++;
                            dd = 1;
                           
                            dayCondition = 5 - countDay;
                            monthCondition = 1;
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
                        <View style={styles.centeredView}>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible(!modalVisible);
                                }}>
                                <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>WARNING!!! BABY!</Text>
                                    <TouchableOpacity
                                        style={[styles.roundButton]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyle}>Close</Text>
                                    </TouchableOpacity>
                                </View>
                                </View>
                            </Modal>
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
                            onPress={() => setModalVisible(true)}
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
  }, 
  centeredView: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})