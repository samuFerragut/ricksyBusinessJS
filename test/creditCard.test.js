const { test, expect } = require("@jest/globals");
const CreditCard = require("../src/creditCard/creditCard");

beforeEach(() => {
    abradolph = new CreditCard("Abradolph", 12345678)
});

test("Crear tarjeta", () => {
    expect(abradolph.owner).toBe("Abradolph");
    expect(abradolph.number).toBe(12345678);
    expect(abradolph.credit).toBe(3000)
    expect(abradolph.symbol).toBe("EZI");
})

test("Pago menor 3000", () => {
    abradolph.pay(2000);
    expect(abradolph.credit).toBe(1000);
})

test("Pago igual 3000", () => {
    abradolph.pay(3000);
    expect(abradolph.credit).toBe(0);
})

test("Pago mayor 3000", () => {
    abradolph.pay(3001);
    expect(abradolph.credit).toBe(3000);
})