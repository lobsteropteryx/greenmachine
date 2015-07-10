/// <reference path="../_references.d.ts" />
/// <amd-dependency path="text!templates/nest-template.html" />
import $ = require('jquery');
import _ = require('lodash');
import Backbone = require('backbone');
import Nest = require('../models/nest-model');

var template = require('text!templates/nest-template.html');

class NestView extends Backbone.View<Backbone.Model> {

    template: (data: any) => string;
    model: Nest;
    input: JQuery;
    tagName: string;

    constructor (options?: Backbone.ViewOptions<Nest>) {
        this.tagName = "li";

        this.events = function () {
            return {
                "click .check": "toggleHatched"
            }
        };

        super(options);

        // Cache the template function for a single item.
        this.template = _.template(template);

        _.bindAll(this, 'render', 'toggleHatched');
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
