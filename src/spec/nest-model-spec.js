define(["require", "exports", '../js/models/nest-model'], function (require, exports, Nest) {
    describe("Fake test", function () {
        var nest = new Nest();
        it("Can create a nest", function () {
            expect(nest).toEqual(jasmine.any(Nest));
        });
    });
});
