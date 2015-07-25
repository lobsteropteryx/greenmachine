/// <reference path="../_references.d.ts" />
import Backbone = require('backbone');
import IBeach = require('../interfaces/IBeach')

class Beach extends Backbone.Model implements IBeach {

    get name(): string { return this.get('name'); }
    set name(value: string) { this.set('name', value); }

    get nests(): string { return this.get('nests'); }
    set nests(value: string) { this.set('nests', value); }

    constructor(args: IBeach) {
        super();
        this.name = args.name;
        this.nests = args.nests;
    }
}

export = Beach;
