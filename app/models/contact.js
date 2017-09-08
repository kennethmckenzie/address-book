import DS from 'ember-data';

export default DS.Model.extend({
  Fullname: DS.attr('string'),
  Phone: DS.attr('string'),
  Mobile: DS.attr('string')
});
