import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Main from './pages/Main/index';

export default function  routes(){
    const Stack = createStackNavigator();
    return(
  <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{headerShown:false}} name="Main" component={Main} />
        </Stack.Navigator>
    </NavigationContainer>

    )
}