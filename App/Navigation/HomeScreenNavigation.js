import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ChatScreen from '../Pages/ChatScreen';
import HomeScreen from '../Pages/HomeScreen';

const Stack = createNativeStackNavigator();

const HomeScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='chat' component={ChatScreen}></Stack.Screen>


    </Stack.Navigator>
  )
}

export default HomeScreenNavigation