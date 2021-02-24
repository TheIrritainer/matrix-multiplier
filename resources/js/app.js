require('./bootstrap');

import Vue from 'vue'

window.Vue = Vue;

import Buefy from 'buefy';
Vue.use(Buefy, {
    defaultUseHtml5Validation: false
});


Vue.component('matrix-multiplier', function (resolve, reject) {
    require(['./components/MatrixMultiplier.vue'], resolve);
});

const app = new Vue({
    el: '#app',
});


