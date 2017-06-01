import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var users = this.store.findAll('user');
    return users;

  }
});
