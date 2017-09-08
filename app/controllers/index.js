import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addcontact: function(){
      var Firstname = this.get('Firstname');
      var Surname = this.get('Surname');
      var Fullname = Firstname +" "+ Surname;
      var Phone = this.get('Phone');
      var Mobile = this.get('Mobile');
      //Create new contact
      var newContact = this.store.createRecord('contact',{
        Fullname: Fullname,
        Phone: Phone,
        Mobile: Mobile
      });
      //Save record
      newContact.save();
      //Clear form
      this.setProperties({
        Firstname: '',
        Surname: '',
        Phone: '',
        Mobile: ''
      });
    }
  }
});
