require('./bootstrap');

import Vue from 'vue'

window.Vue = Vue;

console.log('bla');

Vue.component('matrix-multiplier', function (resolve, reject) {
    require(['./components/MatrixMultiplier.vue'], resolve);
});

const app = new Vue({
    el: '#app',
});


