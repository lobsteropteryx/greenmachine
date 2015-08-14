/// <reference path="annotations/requirejs/require.d.ts" />

require.config({
    baseUrl: "/",
    paths: {
        'views': 'src/js/views',
        'models': 'src/js/models',
        'collections': 'src/js/collections',
        'templates': 'src/js/templates',
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'lodash': 'bower_components/lodash/lodash.min',
        'backbone': 'bower_components/backbone/backbone',
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
            underscore: 'lodash'
        }
    }
});

require(['src/js/app']);
