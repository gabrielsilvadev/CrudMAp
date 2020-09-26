const AsyncStorage =require( '@react-native-community/async-storage');


async function saveItem(data,id){
    data.id = id ? id : new Date().getTime();
    const savedItems = [];
    const response = await AsyncStorage.getItem('items');
    savedItems = JSON.parse(response);
  
  try {
    if (id){
     
        const index = await savedItems.findIndex(item => item.id === id);
        savedItems[index] = data;
        console.log('deu  certo')
        await AsyncStorage.setItem('items', JSON.stringify(savedItems));
      }
  
      else{
      savedItems.push(data);
      await AsyncStorage.setItem('items', JSON.stringify(savedItems));
       }

       
      }
      catch(error){
       console.log(error)
      }
  

}
module.exports = {
    saveItem
}
