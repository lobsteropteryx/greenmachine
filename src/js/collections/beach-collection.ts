/// <reference path="../_references.d.ts" />
import Backbone = require('backbone');
import Beach = require('../models/beach-model');

class BeachCollection extends Backbone.Collection<Beach> { }

export = BeachCollection;
