import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('base.db');
export default  function Add(data){
        var [name,namepopular,informacao,longitude,latitude]=data
        var query = 'INSERT INTO base(id,name,namepopular,inforamcoes,latitude,longitude) VALUES (null,?,?,?,?)';
        var params=[name,namepopular,informacao,longitude,latitude];
        db.transaction((tx)=>{
           tx.executeSql(query,params,(tx,results)=>{
               console.log(results)
           });
        });
}