import React, { useEffect, useState } from 'react';
import {View,Text,TextInput} from 'react-native';
import {style} from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import {useRoute,useNavigation} from '@react-navigation/native'
import {EvilIcons,Feather,Entypo} from '@expo/vector-icons';
import Geo from '../../services/location';
import {createValue} from '../../services/banco';
import {RectButton} from 'react-native-gesture-handler'
export  default function Main(){
const navigation = useNavigation();
const route =useRoute();

let id = route.params ? route.params.id : null;


const [name,setName] = useState('');
const [nameCientifico,setNameCientifico] = useState('');
const [informacoes,setInformacoes] = useState('');
const [latitude,setlatitude] = useState('');
const [longitude,setlongitude] = useState('');

useEffect(()=>{
    if(!route.params) return;
    setName(route.params.name);
    setNameCientifico(route.params.nameCientifico);
    setInformacoes(route.params.informacoes);
    setlatitude(route.params.latitude);
    setlongitude(route.params.longitude);
},[route])

async function getGeo(){
  const geo =  await Geo()
  setlongitude(geo.longitude)
  setlatitude(geo.latitude)
}

function Delete(){
    setlatitude('');
    setlongitude('');
    setName('');
    setNameCientifico('');
    setInformacoes('')
}

const data ={
    name,
    nameCientifico,
    informacoes,
    latitude,
    longitude 
   }

function Tonext(){
    navigation.navigate('Detail')
}
async function Save(data,id){
  await createValue(data,id)
    setlatitude(null);
    setlongitude(null);
    setName('');
    setNameCientifico('');
    setInformacoes('')
}


 return (

     <LinearGradient colors={['#9C07F2','#5204DB']} style={style.gradient}>
    <View  style={style.ConteinerInput}>
        <TextInput
        value={name} 
        placeholder=' Nome ' 
        onChangeText={setName}
        autoCorrect={true} 
        style={style.input}/>
        <TextInput
        value={nameCientifico}
        onChangeText={setNameCientifico} 
        placeholder=' Nome Cientifico ' 
        autoCorrect={true}  
        style={style.input}/>
        <TextInput 
        value={informacoes}
        onChangeText={setInformacoes}
        multiline={true} 
        maxLength={200} 
        placeholder='     Outra.inforamcoes' 
        autoCorrect={true}  style={[style.input,{height:80}]}/>
    </View>
    <View style={style.conteinerGeo}>
 <Text style={style.text}>Longitude:{latitude}</Text>
 <Text style={style.text}>Latitude:{longitude}</Text>
        <RectButton onPress={()=>getGeo()} style={style.buttonGeo}>
            <Text style={style.textButtonGeo}>Pegar localizacao</Text>
             <EvilIcons name="location" style={style.icon}size={30} color="white" />
        </RectButton>
    </View>
    <View style={style.box}>
      <RectButton onPress={()=>Save(data,id)} style={style.Save}>
          <Text style={style.textBox} >Salva</Text>
          <Feather name="save" size={20} color="white" />
      </RectButton>
      <RectButton onPress={()=>Delete()} style={style.Delete}>
          <Text style={style.textBox}>Exluir</Text>
      </RectButton>
    </View>
    <RectButton style={style.Send} onPress={Tonext}><Entypo name="eye" size={37} color="white" /></RectButton>
    </LinearGradient>

 )
}
