function UfosPark() {
    this.fee = 500;
    this.flota = new Map();
}

UfosPark.prototype.add = function (ufo) {
    this.flota.set(ufo, null);
}


const singletonUfosPark = (function () {
    var instance;
    function createInstance() {
        return new UfosPark()
    }
    return {
        getPark: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

module.exports = singletonUfosPark;