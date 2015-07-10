var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone'], function (require, exports, Backbone) {
    var NestCollection = (function (_super) {
        __extends(NestCollection, _super);
        function NestCollection() {
            _super.apply(this, arguments);
        }
        // Filter down the list of all nests that are hatched
        NestCollection.prototype.hatched = function () {
            return this.filter(function (nest) { return nest.get('hatched'); });
        };
        // Filter down the list to only nests that are still not hatched
        NestCollection.prototype.remaining = function () {
            return this.without.apply(this, this.hatched());
        };
        return NestCollection;
    })(Backbone.Collection);
    return NestCollection;
});
