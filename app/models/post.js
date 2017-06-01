import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  titleURL: DS.attr('string'),
  comments: DS.hasMany('comment'),
  uid: DS.attr('string'),
  date: DS.attr('date'),
});
