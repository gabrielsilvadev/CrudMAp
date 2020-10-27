import React,{useState,useEffect} from 'react';
import { Text,FlatList,View, StyleSheet,TouchableOpacity,Alert,AsyncStorage} from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';
import Constants from 'expo-constants';


import {useNavigation,useRoute} from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  const route = useRoute();
  const parametros=route.params;
 
 
const [items, setItems] = (useState([]));



async function edition(id,items){
  const index = await items.find(item => item.id === id);
  navigation.navigate("Principal", index);
}



 async function getItems(){   
     return AsyncStorage.getItem('items')
                 .then(response=>{ 
                   if(response)
                    
                   return Promise.resolve(JSON.parse(response));
                     
              
                  else
                    return  Promise.resolve([]);
  
                  
                 })
  } 

 useEffect(()=>{
  getItems().then(item => setItems(new Array(item)));

 },[parametros,clear])

const createTwoButtonAlert = () =>{
return Alert.alert(
  "ATENCAO",
  "Tem Certeza Que Deseja Deletar?",
  [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "OK", onPress: () => console.log("OK Pressed") }
  ],
  { cancelable: false }
);
}

async function clear(id){
  await createTwoButtonAlert();
  if(createTwoButtonAlert){
   let savedItems = await getItems();
   const index = await savedItems.find(item => item.id === id);
   savedItems.splice(index, 1);

   return AsyncStorage.setItem('items', JSON.stringify(savedItems));
   
  }
  
}
function send(){
  navigation.navigate('Confirmacao');
}
  return (
    
    <View style={styles.container}>

  
      <FlatList data={items}  keyExtractor={item => String(item.id)} renderItem ={ ({item}) =>(
        <View style={styles.box}>
          
          <Text style={styles.text}>Name: {item.name}</Text>
          <Text  style={styles.text}>Name Cientifico: {item.namepopular}</Text>
          <Text  style={styles.text}>Informacoes: {item.informacao}</Text>
          <Text  style={styles.text}>Latitude: {item.latitude}</Text>
          <Text style={styles.text}>Longitude: {item.longitude}</Text>

         
         <TouchableOpacity style={{alignContent:'center',marginTop:-50}}> 
            <MaterialIcons name='delete' onPress={()=>clear(item.id)} size={30} color='red'/>
            </TouchableOpacity> 
            <TouchableOpacity onPress={()=>edition(item.id,items)} > 
                <MaterialIcons name='create' size={30} color='blue'/> 
            </TouchableOpacity> 
            
         </View>
       
      )} />
    
   
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
     onPress={()=>send()}>
    <Text style={styles.text}>Enviar</Text>
    </TouchableOpacity>

      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
     paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
   
    paddingHorizontal:24,
    padding: 8,
  },
  text:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
  },
  flatlist:{
    marginBottom:20,
    padding:15,
    borderRadius:4,
    backgroundColor:'#04d361',
    
    flex:1,
    flexDirection:'row',
    borderWidth:1,
    borderColor:'#737380',
    alignItems:'center',
    shadowColor:'#737380',
    shadowOpacity:5,
    shadowRadius:2,
   
    shadowOffset: {height:2,width:2}
  },
  box:{
  marginBottom:15,
  padding:5,
  borderRadius:4,
  alignContent:'space-between',
  backgroundColor:'#04d361',
  height:40,
  borderWidth:1,
  
  flex:1,
  borderColor:'#737380',
  
  shadowColor:'#737380',
  shadowOpacity:5,
  shadowRadius:2,
  
  
  shadowOffset: {height:2,width:2}
  },
 
});

export function goBack(){
  navigation.navigator('Principal');
}