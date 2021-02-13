import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './src/screens/HomeScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import NoteScreen from './src/screens/NoteScreen';
import TopBar from './src/components/TopBar';
import Kontak from './src/components/Kontak';

import { warnaUtama } from './src/utils/styles'

const Tab = createMaterialTopTabNavigator();



export default function App() {

  const MyTheme = {
    ...DefaultTheme,
    backgroundColors: {
      primary: 'green'
    },
    colors: {
      primary: warnaUtama,
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: warnaUtama,
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <TopBar />
      <Tab.Navigator >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen
          name="Kontak"
          component={NoteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}