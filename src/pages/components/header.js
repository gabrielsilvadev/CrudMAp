import React from 'react';
import { View,StyleSheet,Text} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import {Feather,MaterialIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


export default function Header(){
   const navigation = useNavigation();
    return (
    <View style={styles.consteiner}>
      <BorderlessButton onPress={navigation.goBack}>
      <MaterialIcons name='keyboard-backspace' size={30} color='white'/>
      </BorderlessButton>
    <Text style={styles.title}>Procure no Mapa</Text>
       <BorderlessButton onPress={()=>{navigation.navigate('Main')}}>
      <Feather name='x' size={30} color='red'/>
      </BorderlessButton>
    </View> 
    )
}

const styles= StyleSheet.create({
 consteiner:{
  padding:24,
  backgroundColor:'#9C07F2',
  borderBottomWidth:1,
  borderColor:'#dde3fB',
  paddingTop:44,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
 },
 title:{
   justifyContent:'center',
   color:'white',
   fontSize:18,
   fontWeight:'bold'
 }

})