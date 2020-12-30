function UfosPark() {
    this.fee = 500;
    this.flota = new Map();
}

UfosPark.prototype.add = function (ufo) {
    this.flota.set(ufo, null);
}

UfosPark.prototype.getUfoOf = function(cardNumber) {
    for (let [ufo, owner] of this.flota.entries()) {
      if (cardNumber == owner) {
          return ufo;
        }
      }
      return "No hay ovnis disponibles para ti";
  }

UfosPark.prototype.dispatch = function(card) {
    for(let [ufo, owner] of this.flota.entries()) {
        if (
            this.validate(owner, card.number) &&
            card.credit >= this.fee
          ) {
            card.pay(this.fee);
            this.flota.set(ufo, card.number);
            break;
        }
    }
}

UfosPark.prototype.validate = function (value, owner) {
    let position = Array.from(this.flota.values()).includes(
      owner,
      0
    );
    return !position && value == null;
  };


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