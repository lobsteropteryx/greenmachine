/// <reference path="../_references.d.ts" />
import $ = require('jquery');
import Backbone = require('backbone');
import Nest = require('../models/nest-model');
import NestCollection = require('../collections/nest-collection');
import NestView = require('./nest-view');

class AppView extends Backbone.View<Backbone.Model> {

    input: JQuery;
    allCheckbox: HTMLInputElement;
    statsTemplate: (params: any) => string;
    nests: NestCollection;

    constructor () {
        this.events = <any>{
            "keypress #new-todo": "createOnEnter",
            "keyup #new-todo": "showTooltip",
            "click .todo-clear a": "clearCompleted",
            "click .mark-all-done": "toggleAllComplete"
        };

        super();

        this.nests = new NestCollection();

        this.setElement($("#content"), true);

        _.bindAll(this, 'addOne', 'addAll', 'render', 'toggleAllComplete');

        this.input = this.$("#new-todo");
        this.allCheckbox = this.$(".mark-all-done")[0];
        this.statsTemplate = _.template($('#stats-template').html());

        this.nests.bind('add', this.addNest);
        this.nests.bind('all', this.render);
    }

    render(): Backbone.View<Backbone.Model> {
        var hatched = this.nests.hatched().length;
        var remaining = this.nests.remaining().length;

        this.$('#nest-stats').html(this.statsTemplate({
            total: this.nests.length,
            hatched: hatched,
            remaining: remaining
        }));

        this.allCheckbox.checked = !remaining;
        return this;
    }

    addNest(nest: Nest) {
        var view = new NestView({ model: nest });
        this.$("#nest-list").append(view.render().el);
    }

    newAttributes() {
        return {
            hatched: false
        };
    }

    createOnEnter(e: JQueryKeyEventObject) {
        if (e.keyCode != 13) return;
        this.nests.create(this.newAttributes());
        this.input.val('');
    }
}

export = AppView;
