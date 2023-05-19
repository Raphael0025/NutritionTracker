import { View, Image,} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import OnBoarding from './screens/Onboarding';
import SignIn from './screens/SignIn';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import InsertNutrition from './screens/InsertNutrition';
import Graph from './screens/Graph';

const Stack = createNativeStackNavigator(); 
const TabNav = createBottomTabNavigator();

function DashScreen({navigation}){
  return (
    <TabNav.Navigator initialRouteName='Dashboard' 
                      screenOptions={{
                                      tabBarLabel:() => {return null},
                                      tabBarStyle:{
                                          position: 'absolute',
                                          left: 0, 
                                          right: 0,
                                          height: 70,
                                          borderTopLeftRadius: 20,
                                          borderTopRightRadius: 20,
                                          backgroundColor: '#F2FFF1',
                                          elevation: 5,
                                          borderColor: '#292D32ff',
                                          borderWidth: 1,
                                      }
                                    }
                      }>
        <TabNav.Screen name='Dashboard' 
                        component={Dashboard} 
                        options={{headerShown: false,  
                                  tabBarIcon:({focused}) =>(
                                      <View>
                                        <Image source={focused ? require('./assets/fillhome_.png') : require('./assets/home_.png')}
                                                resizeMode='contain'
                                                style={{
                                                  width: 30,
                                                  height: 30,
                                                }}  
                                                />
                                      </View>
                                    )
                          }}
                        />
        <TabNav.Screen name='InsertNutrition' 
                      component={InsertNutrition} 
                      options={{title: 'Adding Food Items', 
                                headerTitleAlign: 'center', 
                                headerStyle: {shadowOffset: { width: 0, height: 3, },shadowColor: 'black', shadowOpacity: 1, shadowRadius: 3.84, elevation: 15, backgroundColor: '#F2FFF1'}, 
                                headerTitleStyle: { color: '#455F41', fontWeight: 600},
                                tabBarIcon:({focused}) =>(
                                      <View>
                                        <Image source={focused ? require('./assets/fill_add_.png') : require('./assets/add_.png')}
                                                resizeMode='contain'
                                                style={{
                                                  width: 30,
                                                  height: 30,
                                                }}  
                                                />
                                      </View>
                                    )
                              }
                      }/>
        <TabNav.Screen name='Graph' 
                        component={Graph} 
                        options={{title: 'Graph Comparison', 
                        headerTitleAlign: 'center', 
                        headerStyle: {backgroundColor: '#F2FFF1', shadowOffset: { width: 0, height: 3,  }, shadowColor: 'black', shadowOpacity: 1, shadowRadius: 3.84, elevation: 15,}, 
                        headerTitleStyle: {color: '#455F41', fontWeight: 600},
                                tabBarIcon:({focused}) =>(
                                      <View>
                                        <Image source={focused ? require('./assets/fillhealth.png') : require('./assets/health.png')}
                                                resizeMode='contain'
                                                style={{
                                                  width: 30,
                                                  height: 30,
                                                }}  
                                                />
                                      </View>
                                    )
                              }
                      }/>
        <TabNav.Screen name='Profile' 
                        component={Profile} 
                        options={{title: 'Profile', 
                        headerTitleAlign: 'center', 
                        headerStyle: {backgroundColor: '#F2FFF1', shadowOffset: { width: 0, height: 3,  }, shadowColor: 'black', shadowOpacity: 1, shadowRadius: 3.84, elevation: 15,}, 
                        headerTitleStyle: {color: '#455F41', fontWeight: 600},
                                tabBarIcon:({focused}) =>(
                                      <View>
                                        <Image source={focused ? require('./assets/fillcircle.png') : require('./assets/circle.png')}
                                                resizeMode='contain'
                                                style={{
                                                  width: 30,
                                                  height: 30,
                                                }}  
                                                />
                                      </View>
                                    )
                              }
                      }/>
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
