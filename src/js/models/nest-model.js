/// <reference path="../_references.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone'], function (require, exports, Backbone) {
    var Nest = (function (_super) {
        __extends(Nest, _super);
        function Nest() {
            _super.apply(this, arguments);
        }
        Nest.prototype.defaults = function () {
            return {
                hatched: false,
                beach: 'Beach'
            };
        };
        Nest.prototype.initialize = function () {
        };
        Nest.prototype.toggle = function () {
            this.set("hatched", true);
        };
        return Nest;
    })(Backbone.Model);
    return Nest;
});
