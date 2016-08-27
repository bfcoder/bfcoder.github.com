"use strict";

import Ember from "ember";

export default Ember.Route.extend({
  setupController() {
    this._super(...arguments);
    document.title = 'The bfcoder: About me';
  }
});
