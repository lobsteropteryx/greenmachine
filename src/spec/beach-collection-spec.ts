/// <reference path="../js/_references.d.ts" />
/// <reference path="../js/annotations/jasmine/jasmine.d.ts" />
/// <reference path="../js/annotations/jasmine-ajax/jasmine-ajax.d.ts" />
import Beach = require('../js/models/beach-model');
import BeachCollection = require('../js/collections/beach-collection');

describe("Beach Collection", () => {

    beforeEach(function () {
        jasmine.Ajax.install();
    });

    afterEach(function () {
        jasmine.Ajax.uninstall();
    });

    function checkBeachAttributes(beach:Beach, name:string, nests:string) {
        expect(beach.get('name')).toBe(name);
        expect(beach.get('nests')).toBe(nests);
    }

    it("Can be instantiated", () => {
        var beaches = new BeachCollection();
        expect(beaches).toEqual(jasmine.any(BeachCollection));
    });

    it("Can fetch from the API", () => {
        var beaches = new BeachCollection();
        beaches.fetch();
        expect(beaches.length).toBe(0);
    });

    it("Can retrieve a single model from the collection", function () {
        var beaches = new BeachCollection();
        beaches.push(new Beach({
            name: "James Bond",
            nests: ""
        }));

        expect(beaches.length).toBe(1);
        checkBeachAttributes(beaches.at(0), "James Bond", "")
    });

    it("Can fetch a single record from the API", () => {
        var request:JasmineAjaxRequest,
            beaches = new BeachCollection();
        beaches.fetch();

        request = jasmine.Ajax.requests.mostRecent();
        request.respondWith({
            status: 200,
            responseText: '[{"name": "James Bond", "nests": ""}]'
        });

        expect(beaches.length).toBe(1);
        checkBeachAttributes(beaches.at(0), "James Bond", "");
    });

    it("Can fetch a two records from the API", () => {
        var request:JasmineAjaxRequest,
            beaches = new BeachCollection();
        beaches.fetch();

        request = jasmine.Ajax.requests.mostRecent();
        request.respondWith({
            status: 200,
            responseText: '[{"name": "James Bond", "nests": ""}, {"name": "Jaws", "nests": ""}]'
        });

        expect(beaches.length).toBe(2);
        checkBeachAttributes(beaches.at(0), "James Bond", "");
        checkBeachAttributes(beaches.at(1), "Jaws", "");
    });
});

