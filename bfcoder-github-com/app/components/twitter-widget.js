"use strict";

import Ember from "ember";

export default Ember.Component.extend({
  didInsertElement() {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = "!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');";
    this.$().append(script);
  }
});
