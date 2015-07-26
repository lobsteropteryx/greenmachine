/// <reference path="../_references.d.ts" />
import Backbone = require('backbone');
import Beach = require('../models/beach-model');

class BeachCollection extends Backbone.Collection<Beach> {
    url:string = 'api/v1/beaches';
}

export = BeachCollection;
