
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';

import {useNavigation,useRoute} from '@react-navigation/native';


export default function AppItem(props){
   const route =useRoute()
   const navigation =useNavigation();

  async function edition(id,props){
    const item=props.item
    const index = await item.find(item => item.id === id);
    navigation.navigate("Principal", index);
  }
  
  
  return (
       <View style={{ justifyContent: 'center',
      paddingTop:8,
      backgroundColor: '#ecf0f1',
      flex:1,
      paddingHorizontal:10,
      padding: 2,}}>
        <View style={styles.conteiner}>
          <Text style={styles.text}>{props.item}</Text>
          <View style={styles.box}>
            <TouchableOpacity style={styles.buttondel} > 
                <MaterialIcons name='delete' size={30} color='red'/>
            </TouchableOpacity> 
            <TouchableOpacity onPress={()=>edition(props.id,props)} style={styles.buttonEdit}> 
                <MaterialIcons name='create' size={30} color='blue'/> 
            </TouchableOpacity> 
          </View>
        </View>
        </View>
      );
}

const styles =StyleSheet.create({
conteiner:{
  marginBottom:10,
  padding:7,
  borderRadius:4,
  backgroundColor:'#04d361',
  height:110,
  flexDirection:'row',
  borderWidth:1,
  flex:1,
  borderColor:'#737380',
  alignItems:'center',
  shadowColor:'#737380',
  shadowOpacity:5,
  shadowRadius:2,
  
  justifyContent:'space-between',
  shadowOffset: {height:2,width:2}
},
text:{
    fontSize:19,
    color:'white',
    fontWeight:'bold',
    alignSelf:'center',
    flexDirection:'row',
    alignItems:'center',

}
});