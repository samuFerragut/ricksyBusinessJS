var owner = "";
var number = "";
var credit = 3000;
var symbol = "EZI";

export { CreditCart, getterCredit, getterNumber, pay};

function CreditCart(propietario, numeroTarjeta) {
    this.propietario = propietario;
    this.numeroTarjeta = numeroTarjeta;
}
  
var getterCredit = {
    get credit() {
        return (this.credit = credit);
    },
};

var getterNumber = {
    get number() {
        return (this.number = number);
    },
};

function pay (pago) {
    if (credit >= pago) {
        credit -= pago;
        return true;
    } else {
        return false;
    }
}