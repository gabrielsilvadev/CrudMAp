import React from 'react';
import {NavigationContainer}  from '@react-navigation/native';
import   {createStackNavigator} from '@react-navigation/stack';
import Principal from './Principal/index';
import Detalhes from './Detalhes/detalhes';
import Confirmacao from './Confirmacao/confirm';
const  AppStack = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
   <AppStack.Navigator screenOptions={{headerShown:false}}>
     <AppStack.Screen name='Principal' component={Principal}/>
     <AppStack.Screen name='Detalhes' component={Detalhes}/>
     <AppStack.Screen name='Confirmacao' component={Confirmacao}/>
   </AppStack.Navigator>
    </NavigationContainer>
  );
  }


