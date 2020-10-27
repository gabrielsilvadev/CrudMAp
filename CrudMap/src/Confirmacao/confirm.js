import  React,{useState,useEffect}from 'react';
import { Text, View,StyleSheet ,TextInput,KeyboardAvoidingView,Platform,TouchableOpacity,FlatList} from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-community/async-storage';

import * as MailComposer from 'expo-mail-composer';


export default function App() {

const [email,setEmail]=useState('');
const [dados,setdados]=useState(['']);


  async function load(){
   const date =  await  AsyncStorage.getItem('items');
    setdados(JSON.parse(date));
}
useEffect(()=>{
  load();
},[]);
 function sendEmail(dados){
   MailComposer.composeAsync({
     subject:'Geolocalizacao de arvores',   
     recipients:[email],
     isHtml:<FlatList data={dados}  keyExtractor={item => String(item.id)} renderItem ={ ({item}) =>(
        <View>
        <Text style={styles.text}>Name: {item.name}</Text>
        <Text  style={styles.text}>Name Cientifico: {item.namepopular}</Text>
        <Text  style={styles.text}>Informacoes: {item.informacao}</Text>
        <Text  style={styles.text}>Latitude: {item.latitude}</Text>
        <Text style={styles.text}>Longitude: {item.longitude}</Text>
        </View>
     )}/> 
  })
 }
 

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}style={{flex:1}}>
    <View style={styles.container}>
     <TextInput placeholder='Email'
       autoCorrect={true}
       onChangeText={text=>setEmail(text)}
       value={email}
       maxLength={50}
       style={styles.input}/>
        <View style={{alignItems:'center'}}>
       <TouchableOpacity onPress={()=>sendEmail(dados)}style={styles.button}><Text style={styles.text}>Confirmar </Text></TouchableOpacity>
       </View>
    </View>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop:-300,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal:24,
    padding: 8,
  },
  button:{
     height:40,
     borderWidth:1,
     borderColor:'#737380' ,
     backgroundColor:'#453775',
     alignSelf:'center',
     marginTop:20,
     marginBottom:16,
     flexDirection:'row',
     borderRadius:8,
     width: 200,
     alignItems:'center',
     justifyContent:'center'
    },
     text:{
     color:'white',
     fontSize:15,
     fontWeight:'bold',
   },
    input:{
     height:40,
     width: 250,
     borderRadius:8,
     borderColor: '#737380', 
     borderWidth: 1,
     alignSelf:'center',
     marginTop:200,
     justifyContent:'flex-start',
   },
});
