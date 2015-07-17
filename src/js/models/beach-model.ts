/// <reference path="../_references.d.ts" />
import Backbone = require('backbone');

interface IBeach {
    name: string;
}

class Beach extends Backbone.Model implements IBeach {

    get name(): string { return this.get('name'); }

    constructor(args: IBeach) {
        super();
        this.name = args.name;
    }

    initialize() {
        if (!this.get('name')) {
            throw new Error("'name' is a required field");
        }
    }
}

export = Beach;
