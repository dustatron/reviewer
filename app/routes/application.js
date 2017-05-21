import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn: function(provider) {
      var route = this;
      this.get('session').open('firebase', { provider: provider}).then(function(data) {
        route.transitionTo('welcome');
                route.store.query('user', { filter: { uid: data.currentUser.uid} })
                .then(function(tomster) {
                  console.log(tomster);
                });

              //   }else{
              //     console.log('false');
              //     var addUser = function(){
              //         route.store.createRecord('user',{
              //         uid: data.currentUser.uid,
              //         email: data.currentUser.email,
              //         name: data.currentUser.displayName,
              //         photo: data.currentUser.photoURL
              //     });
              //     addUser.save();
              //   }; // end addUser
              // }// end else

        console.log(data.currentUser);
      });
    },
    signOut: function() {
      // this.transitionTo('index');
      this.get('session').close();
    }
  },
  addUser: function() {
    let newUser = this.store.createRecord('user', {
      uid: data.currentUser.uid,
      email: data.currentUser.email,
      name: data.currentUser.displayName,
      photo: data.currentUser.photoURL
    });
    newUser.save();
  }
});
