import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
 conteiner:{
     flex:1,

 },
  gradient:{
     flex:1,
     alignItems:'center',
     position:'relative',
     left:0,
     right:0,
     top:0,
 },
 flatlist:{
     flex:1,
     marginTop:20,
     flexDirection:'column'
 },
 conteinerFlatlist:{
     borderWidth:1,
     height:136,
     width:338,
     borderRadius:13,
     backgroundColor:'#ffff',
     flexDirection:'row',
     justifyContent:'space-between'

 },
 icon:{
    marginTop:40,
    alignSelf:'flex-start',
    marginLeft:20
 },
 text:{
    margin:3,
    fontSize:14,
    fontWeight:'bold',
    color:'#7A7A7A'
 },
 ConteinerButton:{
    flexDirection:'column',
    justifyContent:'space-between',
    marginRight:10,
    marginTop:19,
    marginBottom:28
 },
 send:{
    borderWidth:2,
    borderColor:'#fff',
    backgroundColor:'#5204DB',
    borderRadius:15,
    height:59,
    width:87,
    left:0,
    right:0,
    top:-29,
    marginRight:39,
    alignSelf:'flex-end',
    justifyContent:'center',
    alignItems:'center',
    elevation:18
 }

});