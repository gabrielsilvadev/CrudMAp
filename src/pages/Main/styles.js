import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
 conteiner:{
   flex:1
  },
 srollView:{
  width:'100%'
  },
 input:{
    height:50,
    marginBottom:12,
    width:320,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:25.71,
    backgroundColor:"#fff"
 },
 ConteinerInput:{
     alignItems:'center',
     marginTop:20,
     width:'100%'
     
 },
 gradient:{
     flex:1,
     alignItems:'center',
     position:'relative',
     left:0,
     right:0,
     top:0,
 },

 text:{
     fontSize:20,
     marginLeft:4,
     marginTop:1,
     marginBottom:6,
     fontWeight:'bold',
     alignSelf:'flex-start',
     color:'#7A7A7A',
 },
 button:{
   backgroundColor:'#9C07F2',
   height:50,
   width:200,
   marginTop:7,
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center',
   borderRadius:8,
   
 },
 textButton:{
     marginLeft: 45,
     color:'white',
     fontSize:18,
     fontWeight:'bold'
 },
 icon:{
  marginRight:50,
 },
 
flatlist:{
    flex:1,
    marginTop:20,
    flexDirection:'column'
},
conteinerFlatlist:{
    borderWidth:0.9,
    borderColor: "grey",
    height:136,
    width:338,
    marginTop:2,
    borderRadius:13,
    backgroundColor:'#ffff',
    flexDirection:'row',
    justifyContent:'space-between'

},

});

