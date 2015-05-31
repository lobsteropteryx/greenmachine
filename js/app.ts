/// <reference path="typings/jquery/jquery.d.ts"/>
/// <reference path="typings/lodash/lodash.d.ts"/>
/// <reference path="typings/backbone/backbone.d.ts"/>

import $ = require('jquery');
import AppView = require('views/app-view');

// Load the application once the DOM is ready
$(() => {
    new AppView.AppView();
});