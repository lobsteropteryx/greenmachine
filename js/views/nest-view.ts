/// <reference path="../_references.d.ts" />

import $ = require('jquery');
import _ = require('lodash');
import Backbone = require('backbone');
import Nest = require('../models/nest-model');

class NestView extends Backbone.View<Nest> {

    template: (data: any) => string;
    model: Nest;
    input: JQuery;

    constructor (options?: Backbone.ViewOptions<Nest>) {
        this.tagName = "li";

        this.events = <any>{
            "click .check": "toggleHatched",
        };

        super(options);

        // Cache the template function for a single item.
        this.template = _.template($('#item-template').html());

        _.bindAll(this, 'render', 'close', 'remove');
        this.model.bind('change', this.render);
    }

    render() {
        this.$el.html(this.template(this.model.toJSON()));
        this.input = this.$('.todo-input');
        return this;
    }

    // Toggle the `"hatched"` state of the model.
    toggleHatched() {
        this.model.toggle();
    }
}

export = NestView;
