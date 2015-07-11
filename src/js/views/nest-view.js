var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'lodash', 'backbone', "text!templates/nest-template.html"], function (require, exports, _, Backbone) {
    var template = require('text!templates/nest-template.html');
    var NestView = (function (_super) {
        __extends(NestView, _super);
        function NestView(options) {
            this.tagName = "li";
            this.events = function () {
                return {
                    "click .check": "toggleHatched"
                };
            };
            _super.call(this, options);
            // Cache the template function for a single item.
            this.template = _.template(template);
            _.bindAll(this, 'render', 'toggleHatched');
            this.model.bind('change', this.render);
        }
        NestView.prototype.render = function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.input = this.$('.todo-input');
            return this;
        };
        // Toggle the `"hatched"` state of the model.
        NestView.prototype.toggleHatched = function () {
            this.model.toggle();
        };
        return NestView;
    })(Backbone.View);
    return NestView;
});
