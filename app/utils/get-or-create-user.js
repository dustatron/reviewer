export default function getOrCreateUser() {
  
  return new Promise((resolve)=>{
       store.query('user', {orderBy: 'uid', equalTo: uid }).then( (records) =>{
           if(records.get('length') === 0){
               resolve(store.createRecord('user',{
                   uid: uid,
                   username:username,
                   avatar:avatar
               }));// end resolve
           }// end if
           else{
               resolve(records.get('firstObject'));
           }// end else
       });// end store
   }); // end promise

}
