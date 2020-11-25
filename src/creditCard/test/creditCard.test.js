const { test, expect } = require("@jest/globals");
const CreditCard = require("../creditCard");

beforeEach(() => {
    abradolph = new CreditCard("Abradolph", 12345678)
});

test("Crear tarjeta", () => {
    expect(abradolph.owner).toBe("Abradolph");
    expect(abradolph.number).toBe(12345678);
    expect(abradolph.credit).toBe(3000)
    expect(abradolph.symbol).toBe("EZI");
})