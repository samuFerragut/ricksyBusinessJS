function Receptivo() {

    this.observers = new Set();
}

Receptivo.prototype.register = function (observer) {
    this.observers.add(observer);
};
  
Receptivo.prototype.dispatch = function (owner) {
for (let observer of this.observers) {
    observer.dispatch(owner);
}
};

const singletonReceptivo = (function() {
    var instance;
    function createInstanece() {
        return new Receptivo()
    }
    return {
        getReceptivo: function () {
            if(!instance) {
                instance = createInstanece();
            }
        return instance;
        },
    };
})();

module.exports = singletonReceptivo;
  