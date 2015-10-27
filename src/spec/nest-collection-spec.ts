/// <reference path="../js/_references.d.ts" />
/// <reference path="../js/annotations/jasmine/jasmine.d.ts" />
/// <reference path="../js/annotations/jasmine-ajax/jasmine-ajax.d.ts" />
import Nest = require('../js/models/nest-model');
import NestCollection = require('../js/collections/nest-collection');
import Species = require('../js/enums/species-enum');
import Evidence = require('../js/enums/evidence-enum');

describe("Nest Collection", () => {

    beforeEach(function () {
        jasmine.Ajax.install();
    });

    afterEach(function () {
        jasmine.Ajax.uninstall();
    });

    function checkNestAttributes(nest: Nest, attributes: any) {
        expect(nest.get('layDate')).toEqual(attributes.layDate);
        expect(nest.get('hatchDate')).toEqual(attributes.hatchDate);
        expect(nest.get('hatched')).toBe(attributes.hatched);
        expect(nest.get('parentId')).toBe(attributes.parentId);
        expect(nest.get('species')).toBe(attributes.species);
        expect(nest.get('evidence')).toBe(attributes.evidence);
        expect(nest.get('locationDescription')).toBe(attributes.locationDescription);
    }

    it("Can be instantiated", () => {
        var nests = new NestCollection();
        expect(nests).toEqual(jasmine.any(NestCollection));
    });

    it("Can fetch from the API", () => {
        var nests = new NestCollection();
        nests.fetch();
        expect(nests.length).toBe(0);
    });

    it("Can retrieve a single model from the collection", function () {
        var nests = new NestCollection();
        nests.push(new Nest({
            layDate: new Date(2015, 10, 15),
            hatchDate: new Date(2015, 10, 15),
            hatched: false,
            parentId: 1,
            species: Species.Hawksbill,
            evidence: Evidence.Hatchlings,
            locationDescription: 'Near the palm tree.'
        }));

        expect(nests.length).toBe(1);
        checkNestAttributes(nests.at(0), {
            layDate: new Date(2015, 10, 15),
            hatchDate: new Date(2015, 10, 15),
            hatched: false,
            parentId: 1,
            species: Species.Hawksbill,
            evidence: Evidence.Hatchlings,
            locationDescription: 'Near the palm tree.'
        });

    });

    xit("Can fetch a single record from the API", () => {
        var request:JasmineAjaxRequest,
            nests = new NestCollection();
        nests.fetch();

        request = jasmine.Ajax.requests.mostRecent();
        request.respondWith({
            status: 200,
            responseText: '[{"layDate":"2015-11-15T08:00:00.000Z","hatchDate":"2015-11-15T08:00:00.000Z","hatched":false,"parentId":1,"species":1,"evidence":1,"locationDescription":"Near the palm tree."}]'
        });

        expect(nests.length).toBe(1);
        checkNestAttributes(nests.at(0), {
            layDate: new Date(2015, 10, 15),
            hatchDate: new Date(2015, 10, 15),
            hatched: false,
            parentId: 1,
            species: Species.Hawksbill,
            evidence: Evidence.Hatchlings,
            locationDescription: 'Near the palm tree.'
        });
    });

    //it("Can fetch a two records from the API", () => {
        //var request:JasmineAjaxRequest,
            //nests = new NestCollection();
        //nests.fetch();

        //request = jasmine.Ajax.requests.mostRecent();
        //request.respondWith({
            //status: 200,
            //responseText: '[{"name": "James Bond", "nests": ""}, {"name": "Jaws", "nests": ""}]'
        //});

        //expect(nests.length).toBe(2);
        //checkNestAttributes(nests.at(0), "James Bond", "");
        //checkNestAttributes(nests.at(1), "Jaws", "");
    //});
});

