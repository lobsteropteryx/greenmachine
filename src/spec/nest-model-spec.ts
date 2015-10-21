/// <reference path="../js/_references.d.ts" />
/// <reference path="../js/annotations/jasmine/jasmine.d.ts" />
import Nest = require('../js/models/nest-model');
import Species = require('../js/enums/species-enum');
import Evidence = require('../js/enums/evidence-enum');


describe("Nest", () => {
    it("Can be instantiated", () => {
        var nest = new Nest({
            layDate: new Date(),
            hatchDate: new Date(),
            hatched: false,
            parentId: 1,
            species: Species.Hawksbill,
            evidence: Evidence.Hatchlings,
            locationDescription: 'Near the palm tree.'
        });
        expect(nest).toEqual(jasmine.any(Nest));
    });
});
