import React,{useState,useEffect} from 'react';
import { Text,FlatList,View, StyleSheet,SafeAreaView,TouchableOpacity,Alert,AsyncStorage} from 'react-native';

import Constants from 'expo-constants';

import { MaterialIcons} from '@expo/vector-icons';
import {useNavigation,useRoute} from '@react-navigation/native';
export default function App() {
  const navigation = useNavigation();
  const route = useRoute();
 
const [items, setItems] = useState(['']);
console.log(items)
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
  getItems().then(item => setItems(item));
   
 },[route])

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
  getItems();
 
}



async function edition(id,items){
  const index = await items.find(item => item.id === id);
  navigation.navigate("Principal", index);
}

function send(){
  navigation.navigate('Confirmacao');
}
  return (
    <View style={styles.container}>
      
<View style={{justifyContent:'space-between'}}>
    <SafeAreaView>
    <FlatList
     data={items}
     keyExtractor={dado=>String(dado.id)}
     renderItem={({item})=>(
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
      <View ><Text style={styles.text}>Name: {item.name}</Text>
       <Text style={styles.text}>Namepopular: {item.namepopular}</Text>
       <Text style={styles.text}>Informacoes: {item.informacao}</Text>
       <Text style={styles.text}>Latitude: {item.latitude}</Text>
       <Text style={styles.text}>Longitude: {item.longitude}</Text>
       </View>
       <View >
       <TouchableOpacity  >
        <MaterialIcons
        name="delete-forever"
        size={30}
        onPress={()=>clear(item.id)}
        color='red'
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <MaterialIcons
        name="edit"
        size={30}
        onPress={()=>edition(item.id,items)}
        color='blue'
        />
        </TouchableOpacity>
      
      </View>
      </View>
     
     )}
    />
 </SafeAreaView>
    </View>
    <View  style={{flex:1,padding:20,height:600,display:'flex'}}>
 
          </View>

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
  }
});

export function goBack(){
  navigation.navigator('Principal');
}