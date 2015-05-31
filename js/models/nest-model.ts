/// <reference path="../typings/jquery/jquery.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>
/// <reference path="../typings/backbone/backbone.d.ts"/>

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
