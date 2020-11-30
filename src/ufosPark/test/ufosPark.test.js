const UfosPark = require("../ufosPark");
const CreditCard = require("../../creditCard/creditCard");
const { test, expect } = require("@jest/globals");

beforeEach(() => {
    abradolph = new CreditCard("Abradolph", 49412375);
    rick = new CreditCard("Rick", 54678932);
    morty = new CreditCard("Morty", 78634599);
    squanchy = new CreditCard("Squanchy", 12345678);
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

test("Dispatch", () => {
    let ufos = ["Uber", "Mytaxi", "Cabify", "Yaxi"];
    let actualFlota = new Map()
      .set("Uber", abradolph.number)
      .set("Mytaxi", rick.number)
      .set("Cabify", morty.number)
      .set("Yaxi", squanchy.number)
    for (let position in ufos) {
      ufosPark.add(ufos[position]);
    }
    ufosPark.dispatch(abradolph);
    ufosPark.dispatch(rick);
    ufosPark.dispatch(morty);
    ufosPark.dispatch(squanchy)
    expect(ufosPark.flota).toMatchInlineSnapshot(actualFlota, `Object {}`);
    expect(abradolph.credit).toBe(2500)
  });