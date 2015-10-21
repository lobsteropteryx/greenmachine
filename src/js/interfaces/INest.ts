import Species = require('../enums/species-enum');
import Evidence = require('../enums/evidence-enum');


interface INest {
    layDate: Date;
    hatchDate: Date;
    hatched: boolean;
    parentId: number;
    species: Species;
    evidence: Evidence;
    locationDescription: string;
}

export = INest;
