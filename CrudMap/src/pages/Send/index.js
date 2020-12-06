import React from 'react';
import { View,Text,TextInput,TouchableOpacity } from 'react-native';
import {MaterialIcons } from '@expo/vector-icons';
import  {style} from './styles';
import {useNavigation} from '@react-navigation/native'
import {LinearGradient} from 'expo-linear-gradient';
export default function Main(){
    const navigation = useNavigation() 
    return(
        <View style={style.conteiner}>
         <LinearGradient colors={['#9C07F2','#5204DB']} style={style.gradient}>
         <MaterialIcons style={style.icon} onPress={()=>{navigation.goBack()}} name="keyboard-backspace" size={30} color="white" />
        <TextInput style={style.input} placeholder='Email'/>
        <TouchableOpacity style={style.button}><MaterialIcons name="send" size={30} color="white" /></TouchableOpacity>
        </LinearGradient>
        </View>
    );
}