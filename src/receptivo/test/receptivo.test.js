const { TestScheduler } = require("jest");
const CreditCard = require("../../creditCard/creditCard");
const CrystalExpender = require("../../crystalExpender/crystalExpender");
const UfosPark = require("../../ufosPark/ufosPark");
const Receptivo = require("../receptivo");

beforeEach(() =>{
    abradolph = new CreditCard("Abradolph", 123456789);
    crystal = new CrystalExpender(4,50);
    ufosPark = UfosPark.getPark();
    receptivo = Receptivo.getReceptivo();

    let ufos = ["Uber", "Mytaxi", "Cabify", "Yaxi"];
    for (let position in ufos) {
        ufosPark.add([position]);
    }
});

test("Singleton receptivo", () => {
    let single = Receptivo.getReceptivo();
    expect(receptivo).toMatchObject(single);
});

test("Singleton ufos", () => {
    let ufos = UfosPark.getPark();
    expect(ufosPark).toMatchObject(ufos);
});

test("Receptivo", () => {
    crystal.dispatch(abradolph);
    receptivo.dispatch(abradolph);

    expect(abradolph.credit).toBe(2950);
    expect(crystal.stock).toBe(3);
    ufosPark.dispatch(abradolph);
    expect(Array.from(ufosPark.flota.values()).includes(abradolph.number)).toBeTruthy();
});