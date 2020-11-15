import { getterCredit, getterNumber, pay } from "./creditCard.js";

export { UfosPark, getterNumber, flotaUfo, getUfoOf };

const fee = 500;
var flota = {};

function UfosPark() {}

var getterFlota = {
    get flota() {
        return (this.flota = flota);
    },
};

function flotaUfo(ufo) {
    return (flota[ufo] = null);
}

function getUfoOf(usuario) {
    let ovni = "";

    for (let i = 0; i < getterFlota; i++) {
        if (getterFlota[i] == usuario) {
         ovni = getterFlota[i];   
        }
    }
    return ovni;
}