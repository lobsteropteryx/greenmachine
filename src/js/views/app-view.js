var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'jquery', 'backbone', '../models/nest-model', '../collections/nest-collection', './nest-view', "text!templates/app-template.html"], function (require, exports, $, Backbone, Nest, NestCollection, NestView) {
    var appTemplate = require('text!templates/app-template.html');
    var AppView = (function (_super) {
        __extends(AppView, _super);
        function AppView() {
            this.events = {
                //            "keypress #new-todo": "createOnEnter",
                //            "keyup #new-todo": "showTooltip",
                //            "click .todo-clear a": "clearCompleted",
                //            "click .mark-all-done": "toggleAllComplete"
                "click #clickButton": "addNest"
            };
            _super.call(this);
            this.nests = new NestCollection();
            this.setElement($("#content"), true);
            _.bindAll(this, 'addNest', 'render');
            this.input = this.$("#new-todo");
            this.allCheckbox = this.$(".mark-all-done")[0];
            this.statsTemplate = _.template(appTemplate);
            this.nests.bind('add', this.addNest);
            this.nests.bind('all', this.render);
        }
        AppView.prototype.render = function () {
            var hatched = this.nests.hatched().length;
            var remaining = this.nests.remaining().length;
            this.$el.html(this.statsTemplate({
                total: this.nests.length,
                hatched: hatched,
                remaining: remaining
            }));
            //this.allCheckbox.checked = !remaining;
            return this;
        };
        AppView.prototype.addNest = function () {
            var view = new NestView({ model: new Nest() });
            this.$("#nest-list").append(view.render().el);
        };
        AppView.prototype.newAttributes = function () {
            return {
                hatched: false
            };
        };
        AppView.prototype.createOnEnter = function (e) {
            if (e.keyCode != 13)
                return;
            this.nests.create(this.newAttributes());
            this.input.val('');
        };
        return AppView;
    })(Backbone.View);
    return AppView;
});
