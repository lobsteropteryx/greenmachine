/// <reference path="_references.d.ts" />

require.config({
    baseUrl: "js",
    paths: {
        "jquery": 'lib/jquery/jquery-2.1.4.min',
        "lodash": 'lib/lodash/lodash-min',
        "backbone": 'lib/backbone/backbone-min',
        "text": 'lib/require/text'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        lodash: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});


import $ = require('jquery');
import AppView = require('views/app-view');

// Load the application once the DOM is ready
$(() => {
    new AppView();
});
