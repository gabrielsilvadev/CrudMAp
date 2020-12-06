import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import {style} from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import {useRoute,useNavigation} from '@react-navigation/native'
import {EvilIcons,Feather,Entypo} from '@expo/vector-icons';
import Geo from '../../services/location';
import {createValue} from '../../services/banco';

export  default function Main(){
const navigation = useNavigation();
const route =useRoute();

const [name,setName] = useState('');
const [nameCientifico,setNameCientifico] = useState('');
const [informacoes,setInformacoes] = useState('');
const [latitude,setlatitude] = useState('');
const [longitude,setlongitude] = useState('');

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
    id: new Date().getTime(),
    name,
    nameCientifico,
    informacoes,
    latitude,
    longitude 
   }


async function Save(data){
console.log(data)
 await createValue(data)
}


 return (
 <View style={style.conteiner}>
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
        autoCorrect={true}  style={style.input}/>
    </View>
    <View style={style.conteinerGeo}>
 <Text style={style.text}>Longitude:{latitude}</Text>
 <Text style={style.text}>Latitude:{longitude}</Text>
        <TouchableOpacity onPress={()=>getGeo()} style={style.buttonGeo}>
            <Text style={style.textButtonGeo}>Pegar localizacao</Text>
             <EvilIcons name="location" style={style.icon}size={30} color="white" />
        </TouchableOpacity>
    </View>
    <View style={style.box}>
      <TouchableOpacity onPress={()=>Save(data)} style={style.Save}>
          <Text style={style.textBox} >Salva</Text>
          <Feather name="save" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Delete()} style={style.Delete}>
          <Text style={style.textBox}>Exluir</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={style.Send} onPress={()=>{navigation.navigate('Detail')}}><Entypo name="eye" size={37} color="white" /></TouchableOpacity>
    </LinearGradient>
</View>
 )
}
