var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
    var returnValue = path.replace(/^\/base\//, '').replace(/\.js$/, '');
    return returnValue;
};

Object.keys(window.__karma__.files).forEach(function (file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',

    paths: {
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'lodash': 'bower_components/lodash/lodash.min',
        'backbone': 'bower_components/backbone/backbone-min',
        'views': 'src/js/views',
        'models': 'src/js/models',
        'collections': 'src/js/collections',
        'templates': 'src/js/templates',
        'text': 'bower_components/requirejs-text/text',
        'spec': 'spec'
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
    },

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
