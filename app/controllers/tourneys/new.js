import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTourney: function() {
      var newTourney = this.store.createRecord('tourney', {
        title: this.get('title'),
        location: this.get('location'),
        date: this.get('date')
      });
      newTourney.save();
      this.setProperties({
        title: " ",
        location: " ",
        date: " ",
      });

    }
  }
});
