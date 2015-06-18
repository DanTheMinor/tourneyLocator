import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('tourneys', function() {
    this.route('new');
  });
  this.route('players');
});

export default Router;
