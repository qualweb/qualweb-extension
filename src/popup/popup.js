import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueHighlightJS from 'vue-highlight.js';
 
// Highlight.js languages (Only required languages)
import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/xml';
import vue from 'vue-highlight.js/lib/languages/vue';
 
/*
* Import Highlight.js theme
* Find more: https://highlightjs.org/static/demo/
*/
import 'highlight.js/styles/dark.css';

Vue.use(VueHighlightJS, {
  // Register only languages that you want
  languages: {
      css,
      html,
      vue
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
    render: h => h(App)
});