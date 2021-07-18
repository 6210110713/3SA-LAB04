import React from 'react'
import {View , Text, Image} from 'react-native'
export default function Forecast(props) {
    const image = 'http://openweathermap.org/img/wn/'+props.icon+'.png'
   return( 
    <View > 
    <Text>{props.country}</Text>
    <Text>{props.name}</Text>
    <Text>{props.main}</Text>
    <Text>{props.description}</Text>
    <Image source = {{url: image}} style = {{width:50,height:50}} />
    <Text>Temperater : {props.temp} °C</Text>
    <Text>Temperater maximum : {props.tempmax} °C</Text>
    <Text>Temperater minimum : {props.tempmin} °C</Text>
    </View>
   );
    }