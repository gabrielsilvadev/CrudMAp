import React,{useState,useEffect} from 'react';
import { Text,Image,FlatList,View, StyleSheet,TouchableOpacity,AsyncStorage} from 'react-native';
import Logo from './../../assets/icon.png'
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
export default function App() {
  const navigation = useNavigation();
  const [dados,setresponse] =useState(['']);
  async function load(){
   const dados =  await  AsyncStorage.getItem('dados');
    setresponse(JSON.parse(dados));
}
console.log(dados);

useEffect(()=>{
  load();
 
},[]);
 async function  clear(dado) {
    try {
     await AsyncStorage.removeItem(dado);
        setresponse(dados.filter(date=>date != dado));
        return true;
    }
    catch(exception) {
        return false;
  
 }

}
function back(){
  navigation.navigate('Principal');
}
function send(dados){
  navigation.navigate('Confirmacao',{dados});
}
  return (
    
    <View style={styles.container}>
<View style={{justifyContent:'space-between',flex:1}}>
    <Feather name="arrow-left" size={24} color="blue"    onPress={()=>back()} style={{marginTop:10}}/>
    <Image
        style={{height:90,width:200,marginLeft:40,marginTop:-40}}
        source={Logo}
      />
 
    </View>
    <View  style={{flex:1,padding:20,height:600,display:'flex'}}>
       <FlatList
       style={{  flex:1,padding:20,height:20}}
        data={dados}
        keyExtractor={dado=>String(dado.name)}
        showsHorizontalScrollIndicator={false}
        renderItem={({item:dado})=>(
          <View  style={{  marginBottom:15,
            padding:15,
            borderRadius:4,
            backgroundColor:'#04d361',
            display:'flex',
            flex:1,
            flexDirection:'row',
            borderWidth:1,
            borderColor:'#737380',
            alignItems:'center',
            shadowColor:'#737380',
            shadowOpacity:5,
            shadowRadius:2,
            justifyContent:'space-between',
            shadowOffset: {height:2,width:2}}}>
          <View><Text style={styles.text}>Name: {dado.name}</Text>
           <Text style={styles.text}>Namepopular: {dado.namepopular}</Text>
           <Text style={styles.text}>Informacoes: {dado.informacao}</Text>
           <Text style={styles.text}>Latitude: {dado.latitude}</Text>
           <Text style={styles.text}>Longitude: {dado.longitude}</Text>
           </View>
           <View >
           <TouchableOpacity  >
            <MaterialIcons
            name="delete-forever"
            size={30}
            onPress={()=>clear(dado)}
            color='red'
            />
            
          </TouchableOpacity>
          </View>
          </View>
         
        )}
        />

    <TouchableOpacity  style={{ height:40,
     borderWidth:1,
     borderColor:'#737380' ,
     backgroundColor:'#453775',
     alignSelf:'center',
     marginBottom:16,
     flexDirection:'row',
     borderRadius:8,
     width: 200,
     alignItems:'center',
     justifyContent:'center'}}
     onPress={send}>
    <Text style={styles.text}>Enviar</Text>
    </TouchableOpacity>

      </View>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight=20,
    backgroundColor: '#ecf0f1',
    paddingHorizontal:24,
    padding: 8,
  },
  text:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
  }
});
