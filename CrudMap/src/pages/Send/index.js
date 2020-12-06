import React, { useState } from 'react';
import { View,Text,TextInput,TouchableOpacity } from 'react-native';
import {MaterialIcons } from '@expo/vector-icons';
import  {style} from './styles';
import {useNavigation} from '@react-navigation/native'
import {LinearGradient} from 'expo-linear-gradient';
import * as MailComposer from 'expo-mail-composer';
import {getData} from '../../services/banco';
export default function Main(){
    const navigation = useNavigation()
    const [Email, setEmail] = useState('');
    async function SendEmail(Email){
        const response =await getData();
        console.log(response)
        MailComposer.composeAsync({
        subject:'Geolocalizacao de arvores',   
        recipients:[Email],
        body:response,
        })
    }
    return(
        <View style={style.conteiner}>
         <LinearGradient colors={['#9C07F2','#5204DB']} style={style.gradient}>
         <MaterialIcons style={style.icon} onPress={()=>{navigation.goBack()}} name="keyboard-backspace" size={30} color="white" />
        <TextInput data={Email} onChangeText={setEmail} style={style.input} placeholder='Email'/>
        <TouchableOpacity onPress={()=>SendEmail(Email)}style={style.button}><MaterialIcons name="send" size={30} color="white" /></TouchableOpacity>
        </LinearGradient>
        </View>
    );
}