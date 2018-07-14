"use strict";

import Route from "@ember/routing/route";

export default Route.extend({
  setupController() {
    this._super(...arguments);
    document.title = 'The bfcoder';
  }
});
