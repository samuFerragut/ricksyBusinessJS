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

const singletonReceptivo = (function singleton() {
const receptivo = new Receptivo();

return {
    getReceptivo: function () {
    return receptivo;
    },
};
})();

module.exports = singletonReceptivo;
  