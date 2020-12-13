import React, { useEffect ,useState} from 'react';
import {View,Text,TouchableOpacity,FlatList,Alert} from 'react-native';
import {style} from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import { Feather,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {RectButton,BorderlessButton} from 'react-native-gesture-handler'
import {getData,clear} from '../../services/banco';

export  default function Main(){
const navigation = useNavigation();

const [data,setData] =useState([]);
async function NextTo(){
 navigation.navigate('Send')  
}
useEffect(()=>{
     getData().then(item => setData(...data,item));
  
},[])
async function Clear(id){
    Alert.alert(
        "Atenção",
        "Você tem certeza que deseja excluir este item?",
        [
            {
            text: "Não",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "Sim", onPress: () => {
                    clear(id)
                        .then(response => navigation.navigate("Main", {id:id}));
                }
            }
        ],
        { cancelable: false }
        ); 
}
async function  edition(data,id){
 const index = await data.find(items => items.id ===id)
 navigation.navigate('Main',index)
}
 return (
 <View style={style.conteiner}>
     <LinearGradient colors={['#9C07F2','#5204DB']} style={style.gradient}>
     <BorderlessButton  style={style.icon} onPress={()=>{navigation.navigate('Main',{id:null})}} ><MaterialIcons  name="keyboard-backspace" size={30} color="white" /></BorderlessButton>
      <FlatList 
      style={style.flatlist} 
      data={data} 
      keyExtractor={item =>String(item.id)}
      renderItem={({item})=>(
      <View style={style.conteinerFlatlist}>
          <View style={style.ConteinerText}>
          <Text style={style.text}>Nome:{item.name}</Text>
          <Text style={style.text}>Nome Cinetifico:{item.nameCientifico}</Text>
          <Text style={style.text}>Outr.Infor:{item.informacoes}</Text>
          <Text  style={style.text}>Latitude:{item.latitude}</Text>
          <Text style={style.text}>Longitude:{item.longitude}</Text>
          </View>
          <View style={style.ConteinerButton}>
              <RectButton onPress={()=>edition(data,item.id)}><Feather name="edit-2" size={32} color="#5204DB" /></RectButton>
              <RectButton onPress={()=>Clear(item.id)}><MaterialCommunityIcons name="delete" size={32} color="#CA2828" /></RectButton>
          </View>
      
      </View>
  )}
  />
  <RectButton onPress={()=>NextTo()} style={style.send}><MaterialIcons name="send" size={40} color="white" /></RectButton>
   </LinearGradient>  
 </View>
 )
}
