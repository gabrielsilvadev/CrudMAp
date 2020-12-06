import {StyleSheet} from 'react-native';

export const  style = StyleSheet.create({
    conteiner:{
    flex:1,
    },
    icon:{
     marginTop:40,
     alignSelf:'flex-start',
     marginLeft:20
    },
    gradient:{
     flex:1,
     alignItems:'center',
     position:'relative',
     left:0,
     right:0,
     top:0,
    },
    input:{
     backgroundColor:'#ffff',
     height:60,
     width:324,
     marginVertical:300,
     borderRadius:26
    },
    button:{
     width:307,
     height:48,
     borderWidth:0.8,
     elevation:9,
     backgroundColor:'#5204DB',
     borderColor:'#fff',
     borderRadius:8,
     justifyContent:'center',
     alignItems:'center'   
    }
})