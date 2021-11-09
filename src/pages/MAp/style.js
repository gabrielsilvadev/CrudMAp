import {StyleSheet,Dimensions} from'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      position:'relative'
    },
    map:{
     flex:1,
     position:'relative',
     width:Dimensions.get('window').width,
     height:Dimensions.get('window').height,
    },
    calloutConteiner:{
     width:160,
     height:46,
     paddingHorizontal:16,
     backgroundColor:'rgba(255,255,255,0.8)',
     borderRadius:16,
     justifyContent:'center',
  
     
    },
    callaoutText:{
     color:'#0089a5',
     fontSize:14,
  
    },
    Marke:{
      height:34,
      width:34
    },
    footer:{
     position:'absolute',
     left:24,
     right:24,
     bottom:32,
     backgroundColor:'#fff',
     borderRadius:20,
     height:46,
     paddingLeft:24,
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
     elevation:6
    },
    footerText:{
   
     color:'#8fa7b5',
  
    }
    
  });