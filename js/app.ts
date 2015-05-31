/// <reference path="annotations/jquery/jquery.d.ts"/>
/// <reference path="annotations/lodash/lodash.d.ts"/>
/// <reference path="annotations/backbone/backbone.d.ts"/>

import $ = require('jquery');
import AppView = require('views/app-view');

// Load the application once the DOM is ready
$(() => {
    new AppView.AppView();
});