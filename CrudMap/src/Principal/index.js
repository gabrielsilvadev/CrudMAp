import  React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,KeyboardAvoidingView,Platform,AsyncStorage,Keyboard} from 'react-native';

import * as Location from 'expo-location';
import {useNavigation,useRoute} from '@react-navigation/native';
import Constants from 'expo-constants';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

export  default function Principal(){ 
  const [name,setname]=useState('');
  const [namepopular,setpopular]=useState('');
  const [informacao,setinformacao]=useState('');
  const [latitude, setlatitude] = useState(null);
  const [longitude, setlongitude] = useState(null);

  const navigation = useNavigation();
  const route =useRoute();
  const id = route.params ? route.params.id : undefined;

  
  useEffect(() => {
    if(!route.params) return;
    setname(route.params.name);
    setpopular(route.params.namepopular);
    setinformacao(route.params.informacao);
    setlatitude(route.params.latitude);
    setlongitude(route.params.longitude);
   
  }, [route])

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


const  data = {
  id:new Date().getTime(),
  name,
  namepopular,
  informacao,
  longitude,
  latitude
}

 async function heads(data,id){
  data.id = id ? id : new Date().getTime();
  const savedItems = [];
  const response = await AsyncStorage.getItem('items');

try {
  if (id){
    console.log(id)
     savedItems = JSON.parse(response);
      const index = await savedItems.findIndex(item => item.id === id);
      savedItems[index] = data;
      console.log('deu  certo')
      await AsyncStorage.setItem('items', JSON.stringify(savedItems));
      setinformacao('');
      setname('');
      setpopular('');
      setlongitude(null);
      setlatitude(null);
      navigation.navigate('Detalhes');
    }

    else{
     savedItems = JSON.parse(response);
    savedItems.push(data);
    await AsyncStorage.setItem('items', JSON.stringify(savedItems));
    setinformacao('');
    setname('');
    setpopular('');
    setlongitude(null);
    setlatitude(null);
     }
    }
    catch(error){
     console.log(error)
    }

  }
function  reset(){
  setinformacao('');
  setname('');
  setpopular('');
  setlongitude(null);
  setlatitude(null);
}
 function toDetail(){
   navigation.navigate('Detalhes');
 }
  return (
   <KeyboardAvoidingView
   behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex:1,}}>
    <View style={styles.container}>
     
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
       maxLength={200}
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
        <TouchableOpacity onPress={()=>heads(data,id)} style={styles.button3} ><Text style={styles.text}>Salvar</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>reset()} style={{backgroundColor:'red',marginRight:40,borderRadius:8,marginLeft:40,alignItems:'center',borderWidth:1,justifyContent:'center',borderColor:'#737380',height:30,width:70,}}><Text style={styles.text}>Reset</Text></TouchableOpacity>
       </View>
       <View style={{alignItems:'center'}}>
       <TouchableOpacity  onPress={()=>toDetail()} style={styles.button} ><Text style={styles.text}>Ver Todos </Text></TouchableOpacity>
       </View>
    </View>
    </KeyboardAvoidingView>
  );

}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal:24,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    padding: 8,
    
    
  
  },
   input:{
    flex:1,
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
