import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tasks', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:task_id'});
  });
  this.route('clans', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:clan_id'});
  });
  this.route('players');
  this.route('proudclans');
});

export default Router;
