import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('post');
  },
  beforeModel() {
   this.replaceWith('index');
 }
});
