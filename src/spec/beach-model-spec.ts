/// <reference path="../js/_references.d.ts" />
/// <reference path="../js/annotations/jasmine/jasmine.d.ts" />

import Beach = require('../js/models/beach-model');

describe("Beach", () => {
    it("Can be instantiated", () => {
        var beach = new Beach({name: 'Beach1'});
        expect(beach).toEqual(jasmine.any(Beach));
        expect(beach.get('name')).toBe('Beach1');
    });
});

