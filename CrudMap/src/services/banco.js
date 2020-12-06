
import AsyncStorage from '@react-native-async-storage/async-storage';

 export async function createValue(data){
     try {
        let savedItems=[]
        const response = await AsyncStorage.getItem('data');
        savedItems = JSON.parse(response);
        savedItems=[...savedItems,data]
        await AsyncStorage.setItem('data',JSON.stringify(savedItems))
        console.log('data created')
     }catch(e){
       console.log(e)
     }
}

export const getData = async () => {
   return AsyncStorage.getItem('data')
                 .then(response=>{ 
                   if(response)
                    
                   return Promise.resolve(JSON.parse(response));
                     
              
                  else
                    return  Promise.resolve([]);
  
                  
                 })
}
export const clear = async (id)=>{
  let savedItems = await getData();
   const index =  savedItems.find(item => item.id === id);
   savedItems.splice(index, 1);

   return AsyncStorage.setItem('data', JSON.stringify(savedItems));
   
  }



