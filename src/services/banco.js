import AsyncStorage from '@react-native-async-storage/async-storage';
 export async function createValue(data,id){
     try { 
        data.id = id ? id : new Date().getTime();
        let savedItems=[]
        
        if(id){
          const response = await AsyncStorage.getItem('data');
          savedItems = JSON.parse(response);
          const index = await savedItems.findIndex(item => item.id ===id);
          savedItems[index]=data;
          await AsyncStorage.setItem('data',JSON.stringify(savedItems))

        }else{
        const response = await AsyncStorage.getItem('data');
        savedItems = JSON.parse(response);
        savedItems=[...savedItems,data]
      
        await AsyncStorage.setItem('data',JSON.stringify(savedItems))
        console.log('data created')
        }
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
