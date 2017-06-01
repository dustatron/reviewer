import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn: function() {
      var route = this;
      this.get('session').open('firebase', { provider: 'google' }).then(function(data) {
        route.store.query('user', { orderBy: 'uid', equalTo: data.currentUser.uid }).then(function(results) {
          if(results.get('length') === 0) {
            route.store.createRecord('user', {
              uid: data.currentUser.uid,
              email: data.currentUser.email,
              name: data.currentUser.displayName,
              photo: data.currentUser.photoURL,
            }).save().then(function() {
              route.transitionTo('welcome');
            });
          } else {
            route.transitionTo('welcome');
          }
        })
      });
    },
    signOut: function() {
      this.get('session').close();
      this.transitionTo('index');
    }
  }
});
