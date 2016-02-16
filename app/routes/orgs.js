import Ember from 'ember';

export default Ember.Route.extend({

  favourites: Ember.inject.service(),

  actions: {
    favouriteClicked(org) {
      this.get('favourites').favouriteItem(org);
    }
  },

  model() {
    return [
      {id: 'emberjs'},
      {id: 'ember-cli'},
      {id: 'microsoft'},
      {id: 'yahoo'},
      {id: 'netflix'},
      {id: 'facebook'}
    ]
  }

});
