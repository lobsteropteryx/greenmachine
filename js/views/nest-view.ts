/// <reference path="../annotations/jquery/jquery.d.ts"/>
/// <reference path="../annotations/lodash/lodash.d.ts"/>
/// <reference path="../annotations/backbone/backbone.d.ts"/>

import Nest = require('../models/nest-model');

export class NestView extends Backbone.View<Backbone.Model> {

    template: (data: any) => string;
    model: Nest.Nest;
    input: JQuery;
    //events: () => any;

    constructor (options? ) {
        this.tagName = "li";

        this.events = function () {
            return {
                "click .check": "toggleDone"
            }
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