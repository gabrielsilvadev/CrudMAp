import React, { useEffect ,useState} from 'react';
import {View,Text,A} from 'react-native';
import vector from '../../../assets/Vector.png';
import MapView,{Marker,Callout,PROVIDER_GOOGLE}from 'react-native-maps';
import {getData} from '../../services/banco'
import {styles} from '../MAp/style'

export default function Map(){
const [data, setData] = useState([])


useEffect(()=>{
     getData().then(item => setData(...data,item));
    
},[])
return (
     <View style={styles.container}>
      
          <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
        latitude:-7.2155136,
        longitude:-39.6099584,
        latitudeDelta: 0.0008, 
        longitudeDelta:0.0008,
      }}>
       {data.map(dados =>{
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
