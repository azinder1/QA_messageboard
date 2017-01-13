import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  note: DS.attr(),
  tag: DS.attr()
  // answers: DS.hasMany('review', {async: true})
});
