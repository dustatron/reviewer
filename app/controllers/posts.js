import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  actions: {
    publishPost: function() {
      var controller = this;
      this.store.createRecord('post', {
        title: this.get('title'),
        body: this.get('body'),
        uid: this.get('session.uid'),
        date: new Date()
      }).save().then(function() {
        controller.transitionToRoute('index');
      });
    }
  }
});
