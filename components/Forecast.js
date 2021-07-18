import React from 'react'
import {View , Text} from 'react-native'
export default function Forecast(props) {
    return (
    <View > 
    <Text>{props.country}</Text>
    <Text>{props.name}</Text>
    <Text>{props.main}</Text>
    <Text>{props.description}</Text>
    <Text>{props.temp} °C</Text>
    <Text>Temperater maximum</Text>
    <Text>{props.tempmax} °C</Text>
    <Text>Temperater minimum</Text>
    <Text>{props.tempmin} °C</Text>
    </View>
    );
   }