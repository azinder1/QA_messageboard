import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('question', {path: '/article/:question_id'});
  this.route('edit', {path: '/edit/:question_id'});
  this.route('addquestion');
});

export default Router;
