/// <reference path="annotations/requirejs/require.d.ts" />

require.config({
    baseUrl: "/",
    paths: {
        'views': 'js/views',
        'models': 'js/models',
        'collections': 'js/collections',
        'templates': 'js/templates',
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'lodash': 'bower_components/lodash/lodash.min',
        'backbone': 'bower_components/backbone/backbone-min',
        'text': 'bower_components/requirejs-text/text'
    },

    shim: {
        jquery: {
            exports: '$'
        },

        lodash: {
            exports: '_'
        },

        backbone: {
            deps: ['lodash', 'jquery'],
            exports: 'Backbone'
        }
    },

    map: {
        "*": {
            underscore: "bower_components/lodash/lodash.js"
        }
    }
});

require(['js/app']);