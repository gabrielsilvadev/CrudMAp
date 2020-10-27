const AsyncStorage =require( '@react-native-community/async-storage');

function getItems(){
    return AsyncStorage.getItem('items')
            .then(response => {
                if(response)
                    return Promise.resolve(JSON.parse(response));
                else
                    return Promise.resolve([]);
            })
}

module.exports = {
    getItems
    
}
