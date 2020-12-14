import React, { useEffect, useState } from 'react';
import { View,TextInput, Alert} from 'react-native';
import {MaterialIcons } from '@expo/vector-icons';
import  {style} from './styles';
import {useNavigation} from '@react-navigation/native';;
import {RectButton,BorderlessButton} from 'react-native-gesture-handler'
import {LinearGradient} from 'expo-linear-gradient';
import {getData} from '../../services/banco';
import * as MailComposer from 'expo-mail-composer';


export default function Main(){
        const navigation = useNavigation();
        const [data,setData] = useState([]);
        const [email, setEmail] = useState('');
    
useEffect(()=>{
    getData().then(items => setData(items));
   },[])
    
 
    async function SendEmail(email){
        if (email==''){
         Alert.alert(
             'Insira seu Email'
         )
        }else{
        const render =await data.map(item=>{
            return (
             `
             <div>
             <h2>
              Nome: ${item.name}<br/>
              NomeCientifico: ${item.nameCientifico}<br/>
              Informacoes: ${item.informacoes}<br/>
              Latitude: ${item.latitude}<br/>
              Longitude: ${item.longitude}<br/>
              </h2>
             </div>
            `
        )})

        MailComposer.composeAsync({
        subject:'Geolocalizacao de arvores',   
        recipients:[email],
        isHtml:true,
        body:String(render)
        })
      }        
     }
    return(
         <LinearGradient colors={['#9C07F2','#5204DB']} style={style.gradient}>
         <BorderlessButton style={style.icon} onPress={navigation.goBack}><MaterialIcons   name="keyboard-backspace" size={30} color="white" /></BorderlessButton>
        <TextInput className='input' autoFocus={true}blurOnSubmit={true} autoCompleteType="email" data={email} onChangeText={setEmail} style={style.input} placeholder='Email'/>
        <RectButton onPress={()=>SendEmail(email)}style={style.button}><MaterialIcons name="send" size={30} color="white" /></RectButton>
        </LinearGradient>
    
    );
}