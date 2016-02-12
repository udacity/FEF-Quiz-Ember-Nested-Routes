import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('toys');
  this.route('bricks', function() {
    this.route('red');
    this.route('blue');
  });
});

export default Router;
