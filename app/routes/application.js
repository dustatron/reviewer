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
        console.log(data.currentUser);
      });
    },
    signOut: function() {
      // this.transitionTo('index');
      this.get('session').close();
    }
  }
});
