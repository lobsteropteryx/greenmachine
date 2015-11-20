/// <reference path="../_references.d.ts" />
/// <amd-dependency path="text!templates/app-template.html" />
import $ = require('jquery');
import _ = require('lodash');
import Backbone = require('backbone');
import BeachCollection = require('../collections/beach-collection');
import Nest = require('../models/nest-model');
import NestCollection = require('../collections/nest-collection');
import NestView = require('./nest-view');

var appTemplate = require('text!templates/app-template.html');

class AppView extends Backbone.View<Backbone.Model> {

    input: JQuery;
    allCheckbox: HTMLInputElement;
    statsTemplate: (params: any) => string;
    beaches: BeachCollection;
    nests: NestCollection;

    constructor () {
        this.events = <any>{
//            "keypress #new-todo": "createOnEnter",
//            "keyup #new-todo": "showTooltip",
//            "click .todo-clear a": "clearCompleted",
//            "click .mark-all-done": "toggleAllComplete"
              //"click #clickButton": "addNest"
        };

        super();
        this.beaches = new BeachCollection();
        this.nests = new NestCollection();
        this.setElement($("#content"), true);
    };

    getData(): JQueryXHR {
        return this.beaches.fetch();
    };

    render(): Backbone.View<Backbone.Model> {
        var compiledTemplate: any = _.template(appTemplate);
        this.$el.html(compiledTemplate({beaches: this.beaches.toJSON()}));
        return this;
    };
}

export = AppView;
