import  React,{useState,useEffect}from 'react';
import { Text, View,Image,StyleSheet ,TextInput,TouchableOpacity,AsyncStorage} from 'react-native';
import Constants from 'expo-constants';
import {Feather} from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';
import  { useNavigation} from '@react-navigation/native';
import Logo from './../../assets/icon.png';
export default function App() {
 const navigation=useNavigation();

 const [email,setEmail]=useState('');
const [dados,setdados]=useState(['']);
  async function load(){
   const date =  await  AsyncStorage.getItem('dados');
    setdados(date);
}
useEffect(()=>{
  load();
},[]);
 function sendEmail(){
   MailComposer.composeAsync({
     subject:'Geolocalizacao de arvores',
     recipients:[email],
     body: dados
   })
 }
  function back(){
  navigation.goBack()
  }
  return (
    <View style={styles.container}>
       <Feather name='arrow-left' size={30} color="blue" onPress={back} style={{marginTop:-250}} />
       <Image
        style={{height:100,width:200,marginTop:-60,marginLeft:50}}
        source={Logo}
      />
     <TextInput placeholder='Email'
       autoCorrect={true}
       value={email}
       onChange={e=>setEmail(e.target.value)}
       maxLength={50}
       style={styles.input}/>
        <View style={{alignItems:'center'}}>
       <TouchableOpacity onPress={()=>sendEmail()}style={styles.button}><Text style={styles.text}>Confirmar </Text></TouchableOpacity>
       </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight=20,
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
