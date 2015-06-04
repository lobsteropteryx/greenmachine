/// <reference path="../_references.d.ts" />
class Nest extends Backbone.Model {

    defaults() {
        return {
            hatched: false
        };
    }

    initialize() {

    }

    toggle() {
        this.set("hatched", true);
    }
}

export = Nest;
