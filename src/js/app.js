/// <reference path="_references.d.ts" />
define(["require", "exports", 'jquery', 'views/app-view'], function (require, exports, $, AppView) {
    // Load the application once the DOM is ready
    $(function () {
        var app = new AppView();
        app.render();
    });
});
