import AsyncStorage from '@react-native-community/async-storage';
async function saveItem(data){
    data.id = new Date().getTime();
    let savedItems = [];
    const response = await AsyncStorage.getItem('items');
    
    if(response) savedItems = JSON.parse(response);
    savedItems.push(data);
    
    return AsyncStorage.setItem('items', JSON.stringify(savedItems));
} function getItem(){
    return AsyncStorage.getItem('items')
 .then(response => {
if(response)
return Promise.resolve(JSON.parse(response));

 else
 return Promise.resolve([]); 
 
})
}
