/// <reference path="../annotations/jquery/jquery.d.ts"/>
/// <reference path="../annotations/lodash/lodash.d.ts"/>
/// <reference path="../annotations/backbone/backbone.d.ts"/>

import Nest = require('../models/nest-model');

export class NestCollection extends Backbone.Collection<Nest.Nest> {

    // Reference to this collection's model.
    model = Nest.Nest;

    // Filter down the list of all nests that are hatched
    hatched() {
        return this.filter(nest => nest.get('hatched'));
    }

    // Filter down the list to only nests that are still not hatched
    remaining() {
        return this.without.apply(this, this.hatched());
    }
}