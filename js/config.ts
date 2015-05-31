/// <reference path="typings/requirejs/require.d.ts" />

require.config({
    baseUrl: "/",
    paths: {
        "views": 'js/views',
        "models": 'js/models',
        "collections": 'js/collections',
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'underscore': 'bower_components/lodash/lodash.min',
        'backbone': 'bower_components/backbone/backbone.min'
    },

    shim: {
        jquery: {
            exports: '$'
        },

        underscore: {
            exports: '_'
        },

        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(['js/app']);