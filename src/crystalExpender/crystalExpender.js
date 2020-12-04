function CrystalExpender(stock, itemCost) {
    this.stock = stock;
    this.itemCost = itemCost;
  }

CrystalExpender.prototype.dispatch = function (owner) {
    if (this.stock > 0) {
      if (owner.credit >= this.itemCost) {
        owner.pay(this.itemCost);
        this.stock -= 1;
      }
    }
};
  
module.exports = CrystalExpender;