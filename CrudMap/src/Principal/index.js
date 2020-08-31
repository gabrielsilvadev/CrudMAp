import  React,{useState} from 'react';
import { Text,Image, View, StyleSheet,TextInput,TouchableOpacity,AsyncStorage,Keyboard} from 'react-native';
import Logo from './../../assets/icon.png';
import * as Location from 'expo-location';
import {useNavigation} from '@react-navigation/native';
import Constants from 'expo-constants';
export  default function Principal(){ 
  const [name,setname]=useState('');
  const [namepopular,setpopular]=useState('');
  const [informacao,setinformacao]=useState('');
  const [newdados,setnewdados]=useState(['']);
  const [latitude, setlatitude] = useState(null);
  const [longitude, setlongitude] = useState(null);
  const navigation = useNavigation();
  
  async function geo(){
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }

    let location = await Location.getCurrentPositionAsync({});
    setlatitude(location.coords.latitude);
    setlongitude(location.coords.longitude);
    console.log(location.coords.latitude);
}
 async function heads(e){
     const  data = await {
      name,
      namepopular,
      informacao,
      longitude,
      latitude
    }
    setnewdados([...newdados,data]);
    Keyboard.dismiss();    
   
 }
async function save(newdados){
  const dados = JSON.stringify(newdados);
  await AsyncStorage.setItem('dados',dados);
  
}
async function  clear(newdados) {
  try {
   await AsyncStorage.removeItem(dados);
      setresponse(newdados.filter(date=>date != newdados));
      setnewdados('');
      return true;
  }
  catch(exception) {
      return false;

}
}
 function toDetail(){
       save(newdados);
  navigation.navigate('Detalhes');
 
  }
  return (
  
    <View style={styles.container}>
     <View style={{flexDirection:'row',alignItems:'center'}}>
     <Image
        style={{height:90,width:200,alignSelf:'flex-start'}}
        source={Logo}
      />
     </View>
     
     <View     style={{backgroundColor:'white',height:210,marginVertical:23
     ,borderWidth:1,borderRadius:6,borderColor:'#737380',padding:20,shadowColor:'#737380',shadowOpacity:5,shadowRadius:2,shadowOffset:{height:2,width:2,}}} elevation={50}>
      <TextInput placeholder='Nome Popular'
      autoCorrect={true}
       maxLength={40}
       value={namepopular}
       onChange={e =>setpopular(e.target.value)}
       style={styles.input}/>

     <TextInput  placeholder='Nome cientifico' 
      autoCorrect={true}
       maxLength={40}
       value={name}
       onChange={e =>setname(e.target.value)}
       style={styles.input}/>

       <TextInput placeholder='Outras.Infor'
       autoCorrect={true}
       value={informacao}
       maxLength={40}
       multiline={true}
       onChange={e =>setinformacao(e.target.value)}
        style={styles.input}/>
      </View>
       <View style={{backgroundColor:'#04d361',borderWidth:1,borderRadius:6,         borderColor:'#737380',padding:20,shadowColor:'#737380',shadowOpacity:5,shadowRadius:2,shadowOffset:{height:2,width:2,}}} elevation={50}>
  <Text style={styles.text}>Latitude:{latitude}</Text>
  <Text style={styles.text}>Longitude:{longitude}</Text>
       
       <TouchableOpacity onPress={()=>geo()} style={styles.button}><Text style={styles.text}>Pegar Localiacao </Text></TouchableOpacity>
       </View>
       <View style={styles.button2}>
        <TouchableOpacity onPress={()=>heads()} style={styles.button3} ><Text style={styles.text}>Salvar</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>clear(newdados)} style={{backgroundColor:'red',marginRight:40,borderRadius:8,marginLeft:40,alignItems:'center',borderWidth:1,justifyContent:'center',borderColor:'#737380',height:30,width:70,}}><Text style={styles.text}>Excluir</Text></TouchableOpacity>
       </View>
       <View style={{alignItems:'center'}}>
       <TouchableOpacity  onPress={()=>toDetail()} style={styles.button} ><Text style={styles.text}>Ver Todos </Text></TouchableOpacity>
       </View>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:24,
    paddingTop: Constants.statusBarHeight=20,
    justifyContent: 'center',
    padding: 8,
    
    
  
  },
   input:{
     height:40,
     width: 250,
     borderRadius:8,
     borderColor: '#737380', 
     borderWidth: 1,
     alignSelf:'center',
     marginTop:10,
     marginLeft:10,
     justifyContent:'flex-start'
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
   button2:{
    borderColor:'#737380',
    height:70,
    borderWidth:0.5,
    borderRadius:6,
    backgroundColor:'#04d361',
    marginTop:30,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:2,
    shadowColor:'#737380',
    shadowOpacity:5,
    shadowRadius:2,
    shadowOffset:{height:2,width:2,}

   },
   button3:{
    backgroundColor:'#453775',
    marginRight:40,
    borderRadius:8,
    marginLeft:40,
    alignItems:'center',
    borderWidth:1,
    justifyContent:'center',
    borderColor:'#737380',
    height:30,
    width:70,
   },
   text:{
     color:'white',
     fontSize:15,
     fontWeight:'bold',
   },
});
