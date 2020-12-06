import * as Location from 'expo-location';

export default async function geo(){
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }
    else{
      console.log('permissao negativa')
    }


    let location = await Location.getCurrentPositionAsync({});
    if (!location){
     console.log('error')
    }
    else{
      return location.coords
    }
  }