/// <reference path="_references.d.ts" />

import $ = require('jquery');
import AppView = require('views/app-view');

// Load the application once the DOM is ready
$(() => {
    new AppView();
});