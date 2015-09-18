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

    xit("Can fetch a single record from the API", (done) => {
        var request, beaches = new BeachCollection();
        beaches.fetch();

        request = jasmine.Ajax.requests.mostRecent();
        request.respondWith({
            status: 200,
            responseText: '[{"name": "James Bond", "nests": ""}]'
        });

        expect(beaches.length).toBe(1);
        expect(beaches[1].toEqual({
            name: "James Bond",
            nests: ""
        }));
    });
});

