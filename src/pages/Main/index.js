import React, { useEffect, useState } from 'react';
import {View,Text,TextInput, FlatList, Image} from 'react-native';
import {style} from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import {EvilIcons } from '@expo/vector-icons';
import logo from "../../../assets/logo.png"
import {StarshipsService, MgltCalcService} from '../../services/index'
import {RectButton} from 'react-native-gesture-handler'
export  default function Main(){
const [distanceInput, setDistanceInput] = useState("")
const [starShipList, setStarShipList] = useState([])
const [ stopShipList, setStopStartShipList] = useState([])
useEffect(()=>{
 getStartShips()
},[])

async function getStartShips(){
    const data = await StarshipsService.findAll(1)
    setStarShipList(data)
}

function handleButton(){
    const calculateData = starShipList.map( starship => {
      const stops = MgltCalcService.calculateStopsByDistance(
        distanceInput,
        starship.MGLT,
        starship.consumables
      );
      return { ...starship, stops };
    });
    setDistanceInput("")
    setStopStartShipList(calculateData)


}

 return (
     <View style={style.conteiner}>
     <LinearGradient colors={['#9C07F2','#5204DB']} style={style.gradient}>
    <Image source={logo} style={{height: 70, width: 70, marginTop: 20}}/>
    <View  style={style.ConteinerInput}>
        <TextInput
        value={distanceInput} 
        placeholder=' Mega luzes' 
        onChangeText={setDistanceInput}
        autoCorrect={true} 
        style={style.input}/>
   
           <RectButton onPress={()=>handleButton()} style={style.button}>
            <Text style={style.textButton}>Calcular</Text>
             <EvilIcons name="arrow-right" style={style.icon}size={30} color="white" />
        </RectButton>
        <View>
        <FlatList  
      style={style.flatlist} 
      data={stopShipList} 
      keyExtractor={item => String(item.name)}
      renderItem={({item})=>(
      <View style={style.conteinerFlatlist} >
          <View style={style.ConteinerText}>
          <Text style={style.text}>Mega luz: {item.MGLT}</Text>
          <Text style={style.text}>Nome do Navio: {item.name}</Text>
          <Text style={style.text}>Modelo: {item.model}</Text>
          <Text style={style.text}>Paradas: {item.stops}</Text>
          </View>
      </View>
  )}
  />
        </View>
    </View>    
    </LinearGradient>
    </View>
 )
}
