/// <reference path="../js/_references.d.ts" />
/// <reference path="../js/annotations/jasmine/jasmine.d.ts" />
import AppView = require('../js/views/app-view');
import BeachCollection = require('../js/collections/beach-collection');
import NestCollection = require('../js/collections/nest-collection');

describe("AppView", () => {
    it("Can be instantiated", () => {
        var appview = new AppView();
        expect(appview).toEqual(jasmine.any(AppView));
    });
    it("Has a beach collection", () => {
        var appview = new AppView();
        expect(appview.beaches).toEqual(jasmine.any(BeachCollection));
    });
    it("Has a nest collection", () => {
        var appview = new AppView();
        expect(appview.nests).toEqual(jasmine.any(NestCollection));
    });
});
