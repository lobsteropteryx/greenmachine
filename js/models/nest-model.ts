/// <reference path="../annotations/jquery/jquery.d.ts"/>
/// <reference path="../annotations/lodash/lodash.d.ts"/>
/// <reference path="../annotations/backbone/backbone.d.ts"/>

export class Nest extends Backbone.Model {

    defaults() {
        return {
            hatched: false
        }
    }

    initialize() {

    }

    toggle() {
        this.set("hatched", true);
    }
}
