/// <reference path="../_references.d.ts" />
import Backbone = require('backbone');
import Beach = require('../models/beach-model');

class BeachCollection extends Backbone.Collection<Beach> {
    url:string = 'http://localhost:3000/api/v1/beaches';
}

export = BeachCollection;
