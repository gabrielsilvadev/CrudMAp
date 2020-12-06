import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Main from './pages/Main/index';
import Detail from './pages/Details/index';
import Send from './pages/Send/index';

export default function  routes(){
    const Stack = createStackNavigator();
    return(
  <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen  name='Detail' component={Detail}/>
        <Stack.Screen  name='Send' component={Send}/>
      </Stack.Navigator>
    </NavigationContainer>

    )
}