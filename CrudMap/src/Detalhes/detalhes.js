import React,{useState,useEffect} from 'react';
import { Text,ScrollView,View, StyleSheet,TouchableOpacity,Alert,AsyncStorage} from 'react-native';
import AppItem from './Listitem';
import Constants from 'expo-constants';


import {useNavigation,useRoute} from '@react-navigation/native';
export default function App(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const parametros=route.params;
  const item =route.params
  console.log(item)
 
const [items, setItems] = useState([]);





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

 },[parametros])

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
      
<View style={{justifyContent:'space-between'}}>
    <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemsContainer}>
        { items.map(item => {
            return <AppItem key={item.id} id={item.id} item={`Name: ${item.name} NamePopular: ${item.namepopular} Latitude: ${item.latitude} Longitude: ${item.longitude}`} />
        }) }
    </ScrollView>
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
    alignItems:'center',
    alignSelf:'center',
    fontWeight:'bold',
  },
  flatlist:{
    marginBottom:15,
    padding:15,
    borderRadius:4,
    height: 100,
    backgroundColor:'#04d361',
    
    flex:1,
    flexDirection:'row',
    borderWidth:1,
    borderColor:'#737380',
    alignItems:'center',
    shadowColor:'#737380',
    shadowOpacity:5,
    shadowRadius:2,
    justifyContent:'space-between',
    shadowOffset: {height:2,width:2}
  }
});

export function goBack(){
  navigation.navigator('Principal');
}