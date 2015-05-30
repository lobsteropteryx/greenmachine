/// <reference path="../lib/jquery/jquery.d.ts"/>
/// <reference path="../lib/lodash/lodash.d.ts"/>
/// <reference path="../lib/backbone/backbone.d.ts"/>

import $ = require('jquery');
import _ = require('underscore');
import Backbone = require('backbone');
import Nest = require('models/nest-model');

export class NestView extends Backbone.View {

    template: (data: any) => string;
    model: Nest.Nest;
    input: JQuery;

    constructor (options? ) {
        this.tagName = "li";

        this.events = {
            "click .check": "toggleDone",
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