/// <reference path="../js/_references.d.ts" />
/// <reference path="../js/annotations/jasmine/jasmine.d.ts" />
import Nest = require('../js/models/nest-model');

describe("Nest", () => {
    it("Can be instantiated", () => {
        var nest = new Nest();
        expect(nest).toEqual(jasmine.any(Nest));
    });
});
