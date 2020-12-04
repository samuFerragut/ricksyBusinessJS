const CreditCard = require('../src/creditCard/creditCard');
const RickMenu = require('../src/rickMenu/rickMenu');
const { test, expect } = require('@jest/globals');

beforeEach(() => {
    abradolph = new CreditCard("Abradolph", 12345678);
    menu = new RickMenu();
});

test('Menu no null', () => {
    expect(menu).not.toBeNull();
});

test('Pagar 1', () => {
    menu.dispatch(abradolph);
    expect(abradolph.credit).toBe(2990);
});

test('No stock', () => {
    noStock = new CreditCard("SinStock", 3);
    for (let i = 0; i < 101; i++) {
        menu.dispatch(noStock);
    }
    menu.dispatch(abradolph);
    expect(abradolph.credit).toBe(3000);
    expect(menu.stock).toBe(0);
});

test('Abradolph sin pasta', () => {
    chino = new RickMenu();
    japones = new RickMenu();
    español = new RickMenu();
    for (let i = 0; i < 101; i++) {
        chino.dispatch(abradolph);
        japones.dispatch(abradolph);
        español.dispatch(abradolph);
    }
    menu.dispatch(abradolph);
    expect(menu.stock).toBe(100)
})
