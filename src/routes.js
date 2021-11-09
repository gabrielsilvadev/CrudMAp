import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Main from './pages/Main/index';
import Detail from './pages/Details/index';
import Header from './pages/components/header'
import Send from './pages/Send/index';
import Map from './pages/MAp/index';
export default function  routes(){
    const Stack = createStackNavigator();
    return(
  <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{headerShown:false}} name="Main" component={Main} />
        <Stack.Screen options={{headerShown:false}} name='Detail' component={Detail}/>
        <Stack.Screen  options={{headerShown:false}} name='Send' component={Send}/>
        <Stack.Screen options={{header:()=> <Header/>}} name='Map' component={Map} />
        </Stack.Navigator>
    </NavigationContainer>

    )
}