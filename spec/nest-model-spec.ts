/// <reference path="../js/_references.d.ts" />
/// <reference path="../js/annotations/jasmine/jasmine.d.ts" />
import config = require('../js/config');
import Nest = require('../js/models/nest-model');

describe("Fake test", () => {
    var nest = new Nest();

    it("Can create a nest", () => {
        expect(nest).toEqual(jasmine.any(Nest));
    });
});

