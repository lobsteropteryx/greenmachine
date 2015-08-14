/// <reference path="../js/_references.d.ts" />
/// <reference path="../js/annotations/jasmine/jasmine.d.ts" />
/// <reference path="../js/annotations/jasmine-ajax/jasmine-ajax.d.ts" />

import BeachCollection = require('../js/collections/beach-collection');

describe("Beach Collection", () => {

    beforeEach(function () {
        jasmine.Ajax.install();
    });

    afterEach(function () {
        jasmine.Ajax.uninstall();
    });

    it("Can be instantiated", () => {
        var beaches = new BeachCollection();
        expect(beaches).toEqual(jasmine.any(BeachCollection));
    });

    it("Can fetch from the API", () => {
        var beaches = new BeachCollection();
        beaches.fetch();
        expect(beaches.length).toBe(0);
    });

    it("Can fetch a single record from the API", (done) => {
        var request, beaches = new BeachCollection();

        spyOn($, 'ajax').and.callThrough();

        beaches.fetch().then(function () {
            expect(beaches.length).toBe(1);
        });

        request = jasmine.Ajax.requests.mostRecent();
        request.respondWith({
            status: 200,
            responseText: '[{id: 1}]'
        });

        $.ajax.calls.argsFor(0)[1].success();

        done();
    });
});

