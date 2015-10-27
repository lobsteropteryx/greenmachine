import $ = require('jquery');
import Backbone = require('backbone');
import Nest = require('../models/nest-model');

class NestCollection extends Backbone.Collection<Nest> {
    url:string = 'api/v1/nests';

    // Filter down the list of all nests that are hatched
    hatched() {
        return this.filter(nest => nest.get('hatched'));
    }

    // Filter down the list to only nests that are still not hatched
    remaining() {
        return this.without.apply(this, this.hatched());
    }
}

export = NestCollection;
