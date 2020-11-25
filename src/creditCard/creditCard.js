function CreditCard(owner, number) {
    this.owner = owner;
    this.number = number;
    this.credit = 3000;
    this.symbol = "EZI";
}

CreditCard.pay = function (pago) {
    if (this.credit >= pago) {
        this.credit -= pago;
        return true;
    } else {
        return false;
    }
}

module.exports = CreditCard