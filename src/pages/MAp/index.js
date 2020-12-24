import React, {useEffect, useState} from 'react';
import {View,Text} from 'react-native';
import vector from '../../../assets/Vector.png';
import MapView,{Marker,Callout,PROVIDER_GOOGLE}from 'react-native-maps';
import {styles} from '../MAp/style'
import { useRoute } from '@react-navigation/native';
import Geo from '../../services/location';

export default function Map(){
const route = useRoute();

const [latitude,setlatitude] = useState('');
const [longitude,setlongitude] = useState('');

async function getGeo(){
  const geo =  await Geo()
  setlongitude(geo.longitude)
  setlatitude(geo.latitude)
}
useEffect(()=>{
getGeo();
},[])
const NewDados =route.params

return (
     <View style={styles.container}>
      
          <MapView 
        
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
        latitude:latitude,
        longitude:longitude,
        latitudeDelta: 0.0008, 
        longitudeDelta:0.0008,
      }}>
       {NewDados.data.map(dados =>{
         return (
           <Marker
         key={dados.id}
         icon={vector}
         calloutAnchor={{
           x:0.8,
           y:0.001,
         }}
         
         style={styles.Marke}
         coordinate={{
          latitude:dados.latitude,
          longitude:dados.longitude,
         }}
        >
          <Callout>
            <View style={styles.calloutConteiner}>
            <Text style={styles.callaoutText}>{dados.name}</Text>
            </View>
          </Callout>
        </Marker>
         );
       })}
      </MapView>
     </View>
 );
}
