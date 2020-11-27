const UfosPark = require("../ufosPark");
const CreditCard = require("../../creditCard/creditCard");
const { test, expect } = require("@jest/globals");

beforeEach(() => {
    abradolph = new CreditCard("Abradolph", 49412375);
    rick = new CreditCard("Rick", 54678932);
    morty = new CreditCard("Morty", 78634599);
    ufosPark = UfosPark.getPark();
  });


test("Añadir 3 ufos al UfosPark", () => {
    let ufos = ["Ufo1", "Ufo2", "Ufo3"];
    let actualFlota = new Map();
    for (let position in ufos) {
      actualFlota.set(ufos[position], null);
      ufosPark.add(ufos[position]);
    }
    console.log(actualFlota)
    expect(ufosPark.flota).toMatchObject(actualFlota);
});