import React from 'react';
import {View,Text} from 'react-native';
import vector from '../../../assets/Vector.png';
import MapView,{Marker,Callout}from 'react-native-maps';

import {styles} from '../MAp/style'
import { useRoute } from '@react-navigation/native';


export default function Map(){
const route = useRoute();

const NewDados = route.params

return (
     <View style={styles.container}>
          <MapView 
        style={styles.map}
        initialRegion={{
        latitude:-7.2382894,
        longitude:-39.4101016,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
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
