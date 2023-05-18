import { StatusBar } from 'expo-status-bar';
import {ImageBackground, Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import OnBoarding from './screens/Onboarding';
import SignIn from './screens/SignIn';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import InsertNutrition from './screens/InsertNutrition';

const Stack = createNativeStackNavigator(); 
const TabNav = createBottomTabNavigator();

function DashScreen(){
  return (
    <TabNav.Navigator initialRouteName='Dashboard' 
                      screenOptions={{headerShown: false,showLabel: false, 
                      tabBarStyle:{
                          position: 'absolute',
                          bottom: 0,
                          left: 0, 
                          right: 0,
                          height: 70,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                          backgroundColor: '#fff',
                          shadowOffset: {
                              width: 1,
                              height: 1,
                          },
                          shadowOpacity: 0.8,
                          shadowColor: '#000',
                          shadowRadius: 2,
                          elevation: 4,
                      }
    }} >
        <TabNav.Screen name='Dashboard' component={Dashboard} options={{title: 'Dashboard'}}/>
        <TabNav.Screen name='InsertNutrition' component={InsertNutrition} options={{title: 'InsertNutrition'}}/>
        <TabNav.Screen name='Profile' component={Profile} options={{title: 'Profile'}}/>
    </TabNav.Navigator>
  ); 
}

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false, }}>
          <Stack.Screen name="OnBoarding" component={OnBoarding}/>
          <Stack.Screen name="SignIn" component={SignIn}/>  
          <Stack.Screen name="DashScreen" component={DashScreen}/>  
        </Stack.Navigator>
      </NavigationContainer>
  ); 
}

const styles = StyleSheet.create({
  barStyle: {
    position: 'absolute',
    bottom: 25,
    left: 20, 
    right: 20,
    elevation: 0,
    height: 90,
    borderRadius: 15,
  },
});