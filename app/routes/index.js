import Ember from 'ember';

export default Ember.Route.extend({
  model() {

  //Add Test Contact
  var newContact = this.store.createRecord('contact',{
    Fullname: 'Kenneth McKenzie',
    Phone: '0123456789',
    Mobile: '9876543210'
  });
  newContact.save();

  // return contacts;
  return this.store.findAll('contact');
 }
});
