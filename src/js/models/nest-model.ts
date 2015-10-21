/// <reference path="../_references.d.ts" />

import $ = require('jquery');
import Backbone = require('backbone');
import INest = require('../interfaces/INest');
import Species = require('../enums/species-enum');
import Evidence = require('../enums/evidence-enum');

class Nest extends Backbone.Model implements INest {
    get beach(): string { return this.get('beach'); }
    set beach(value: string) { this.set('beach', value); }

    get layDate(): Date { return this.get('layDate'); }
    set layDate(value: Date) { this.set('layDate', value); }

    get hatchDate(): Date { return this.get('hatchDate'); }
    set hatchDate(value: Date) { this.set('hatchDate', value); }

    get hatched(): boolean { return this.get('hatched'); }
    set hatched(value: boolean) { this.set('hatched', value); }

    get parentId(): number { return this.get('parentId'); }
    set parentId(value: number) { this.set('parentId', value); }

    get species(): Species { return this.get('species'); }
    set species(value: Species) { this.set('species', value); }

    get evidence(): Evidence { return this.get('evidence'); }
    set evidence(value: Evidence) { this.set('evidence', value); }

    get locationDescription(): string { return this.get('locationDescription'); }
    set locationDescription(value: string) { this.set('locationDescription', value); }

    constructor(args: INest) {
        super();
        this.layDate = args.layDate;
        this.hatchDate = args.hatchDate;
        this.hatched = args.hatched;
        this.parentId = args.parentId;
        this.species = args.species;
        this.evidence = args.evidence;
        this.locationDescription = args.locationDescription;
    }
}

export = Nest;
