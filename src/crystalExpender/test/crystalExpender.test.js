const CrystalExpender = require("../crystalExpender")
const CreditCard = require("../../creditCard/creditCard");
const { test, expect } = require("@jest/globals");

beforeEach(() => {
    abradolph = new CreditCard("Abradolph", 49412375);
    crystalExpender = new CrystalExpender(3, 50)
});

test("Comprar cristal", () => {
    crystalExpender.dispatch(abradolph)

    expect(crystalExpender.stock).toBe(2)
    expect(abradolph.credit).toBe(2950)
});