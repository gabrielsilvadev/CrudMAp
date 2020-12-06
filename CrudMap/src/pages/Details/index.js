import React, { useEffect ,useState} from 'react';
import {View,Text,TouchableOpacity,FlatList,Alert} from 'react-native';
import {style} from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import { Feather,MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {getData,clear} from '../../services/banco';
export  default function Main(){
const navigation = useNavigation();

const [data,setData] =useState([]);

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
     <MaterialIcons style={style.icon} onPress={()=>{navigation.navigate('Main',{id:null})}} name="keyboard-backspace" size={30} color="white" />
      <FlatList 
      style={style.flatlist} 
      data={data} 
      keyExtractor={data =>String(data.id)}
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
              <TouchableOpacity onPress={()=>edition(data,item.id)}><Feather name="edit-2" size={32} color="#5204DB" /></TouchableOpacity>
              <TouchableOpacity onPress={()=>Clear(item.id)}><MaterialCommunityIcons name="delete" size={32} color="#CA2828" /></TouchableOpacity>
          </View>
      
      </View>
  )}
  />
  <TouchableOpacity onPress={()=>{navigation.navigate('Send')}} style={style.send}><MaterialIcons name="send" size={40} color="white" /></TouchableOpacity>
   </LinearGradient>  
 </View>
 )
}
