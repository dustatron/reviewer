import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('about');
  this.route('contact');

  this.authenticatedRoute('welcome');
  this.authenticatedRoute('profile');
  this.authenticatedRoute('posts', function() {
    this.route('comments');
  });

});

export default Router;
