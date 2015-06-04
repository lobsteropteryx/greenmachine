/// <reference path="../_references.d.ts" />

import $ = require('jquery');
import Backbone = require('backbone');

class Nest extends Backbone.Model {

    defaults() {
        return {
            hatched: false,
            beach: 'Beach'
        };
    }

    initialize() {

    }

    toggle() {
        this.set("hatched", true);
    }
}

export = Nest;
