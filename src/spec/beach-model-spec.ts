/// <reference path="../js/_references.d.ts" />
/// <reference path="../js/annotations/jasmine/jasmine.d.ts" />

import Beach = require('../js/models/beach-model');

describe("Beach", () => {
    it("Can be instantiated", () => {
        var beach = new Beach({name: 'Beach1', nests: '/api/v1/nests/?beach=Beach1'});
        expect(beach).toEqual(jasmine.any(Beach));
    });
});
