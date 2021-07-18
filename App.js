import React from 'react';
import { View } from 'react-native';
import { NavigationContainer, StackActions,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';


const Stack = createStackNavigator();


export default function App() {
 return (
 <NavigationContainer >
 <Stack.Navigator>
 <Stack.Screen name="Home" component={ZipCodeScreen}  
 options={{
          title: 'Home a Lone',
          headerStyle: {
            backgroundColor: '#0033CC',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignItems: 'center',  
            fontWeight: 'bold',
            alignSelf: 'center' 
          },
        }} />
 <Stack.Screen name="Weather" component={WeatherScreen} 
 options={{
    title: 'Status',
    headerStyle: {
      backgroundColor: '#FA8072',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      alignItems: 'center',  
      fontWeight: 'bold',
      alignSelf: 'center' 
    },
  }}/>
 </Stack.Navigator>
 </NavigationContainer>
 );
}