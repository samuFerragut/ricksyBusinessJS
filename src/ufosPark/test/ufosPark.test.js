const UfosPark = require("../ufosPark");
const CreditCard = require("../../creditCard/creditCard");
const { test, expect } = require("@jest/globals");

beforeEach(() => {
    abradolph = new CreditCard("Abradolph", 49412375);
    rick = new CreditCard("Rick", 54678932);
    morty = new CreditCard("Morty", 78634599);
    ufosPark = UfosPark.getPark();
  });


test("Añadir ufos", () => {
    let ufos = ["Uber", "Mytaxi", "Cabify", "Yaxi"];
    let actualFlota = new Map();
    for (let position in ufos) {
      actualFlota.set(ufos[position], null);
      ufosPark.add(ufos[position]);
    }
    expect(ufosPark.flota).toMatchObject(actualFlota);
});

test("Get ufo", () => {
    let ufos = ["Uber", "Mytaxi", "Cabify", "Yaxi"];
    for (let position in ufos) {
      ufosPark.add(ufos[position]);
    }
    expect(ufosPark.getUfoOf()).toBe("Uber");
});
