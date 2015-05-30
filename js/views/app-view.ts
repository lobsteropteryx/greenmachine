/// <reference path="../lib/jquery/jquery.d.ts"/>
/// <reference path="../lib/lodash/lodash.d.ts"/>
/// <reference path="../lib/backbone/backbone.d.ts"/>

import $ = require('jquery');
import Backbone = require('backbone');
import NestCollection = require('collections/nest-collection');
import NestView = require('views/nest-view');

export class AppView extends Backbone.View {

    events = {
        "keypress #new-todo": "createOnEnter",
        "keyup #new-todo": "showTooltip",
        "click .todo-clear a": "clearCompleted",
        "click .mark-all-done": "toggleAllComplete"
    };

    input: JQuery;
    allCheckbox: HTMLInputElement;
    statsTemplate: (params: any) => string;
    Nests: NestCollection.NestCollection;

    constructor () {
        super();

        this.Nests = new NestCollection.NestCollection();

        this.setElement($("#content"), true);

        _.bindAll(this, 'addOne', 'addAll', 'render', 'toggleAllComplete');

        this.input = this.$("#new-todo");
        this.allCheckbox = this.$(".mark-all-done")[0];
        this.statsTemplate = _.template($('#stats-template').html());

        this.Nests.bind('add', this.addNest);
        this.Nests.bind('all', this.render);
    }

    render() {
        var hatched = this.Nests.hatched().length;
        var remaining = this.Nests.remaining().length;

        this.$('#nest-stats').html(this.statsTemplate({
            total: this.Nests.length,
            hatched: hatched,
            remaining: remaining
        }));

        this.allCheckbox.checked = !remaining;
    }

    addNest(nest) {
        var view = new NestView.NestView({ model: nest });
        this.$("#nest-list").append(view.render().el);
    }

    newAttributes() {
        return {
            hatched: false
        };
    }

    createOnEnter(e) {
        if (e.keyCode != 13) return;
        this.Nests.create(this.newAttributes());
        this.input.val('');
    }
}