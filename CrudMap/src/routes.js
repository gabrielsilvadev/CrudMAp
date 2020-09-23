import React from 'react';
import {Image,Button} from 'react-native';
import {NavigationContainer}  from '@react-navigation/native';
import   {createStackNavigator} from '@react-navigation/stack';


import Principal from './Principal/index';
import Detalhes,{goBack} from './Detalhes/detalhes';
import Logo from '../assets/icon.png';
import Confirmacao from './Confirmacao/confirm';

const  AppStack = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
   <AppStack.Navigator >
     <AppStack.Screen name='Principal' component={Principal}  options={{ 
     headerTitle: () => ( // App Logo
      <Image
        style={{ width: 300, height: 150 ,marginLeft:-70}}
        source={Logo}
        resizeMode='contain'
      />
    ),
    headerTitleStyle: { flex: 1, textAlign: 'center' },
    }}/>
     <AppStack.Screen name='Detalhes' component={Detalhes}   options={{ 
     headerTitle: () => ( // App Logo
      <Image
        style={{ width: 300, height: 150 ,marginLeft:-50}}
        source={Logo}
        resizeMode='contain'
       
      />
     
    ),
    
    }}/>
     <AppStack.Screen name='Confirmacao' component={Confirmacao}
     options={{ 
      headerTitle: () => ( // App Logo
       <Image
         style={{ width: 300,height:150,marginLeft:-50 }}
         source={Logo}
         resizeMode='contain'
       />
     ),
     headerTitleStyle: { flex: 1, textAlign: 'center' },
     }}
     />
   </AppStack.Navigator>
    </NavigationContainer>
  );
  }


