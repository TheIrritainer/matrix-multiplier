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

    data() {
        return {
            loaderActive: false,
            activeRequests: 0,
        }
    },

    created()
    {
        this.bindAxios();
    },

    methods: {

        bindAxios() {
            axios.interceptors.request.use((config) => {
                this.loaderActive = true;
                this.activeRequests++;

                return config;

            }, (error) => {

                this.closeLoader();
                return Promise.reject(error);
            });

            axios.interceptors.response.use((response) => {

                this.closeLoader();

                return response;
            }, (error) => {
                this.closeLoader();
                return Promise.reject(error);
            });
        },

        closeLoader()
        {
            this.activeRequests--;

            if (this.activeRequests < 1)
            {
                this.activeRequests = 0;
                this.loaderActive = false;
            }
        }
    }
});


