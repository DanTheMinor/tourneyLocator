import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  location: DS.attr('string'),
  date: DS.attr('string')
});
