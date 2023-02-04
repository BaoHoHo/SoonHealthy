import React from "react";
import {View} from "react-native";
import { Calendar } from "react-native-calendars";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export default function CalendarScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <RNDateTimePicker value={new Date()} />
            <Calendar/>
        </View>
    );
}