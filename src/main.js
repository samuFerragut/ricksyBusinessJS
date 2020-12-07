//imports 
var CreditCard =  require("./creditCard/creditCard");
var singleUfosPark = require("./ufosPark/ufosPark");
var CrystalExpender = require("./crystalExpender/crystalExpender");
var RickMenu = require("./rickMenu/rickMenu");
var singletonReceptivo = require("./receptivo/receptivo")
var menuJson = require("./data/menus.json")

var abradolph = new CreditCard("Abradolph", "12345678");
  
  console.log("\n" + "Tarjeta de Abradolph" + "\n");
  console.log(abradolph);
  

  // UfosPark

  console.log("<------------------------------>")
  var ufosPark = singleUfosPark.getPark();
  let ufos = ["Uber", "Cabify"];
  for (let position in ufos) {
    ufosPark.add(ufos[position]);
  }
  console.log("Lista de ovnis")
  console.log(ufos)

  console.log("<------------------------------>")
  console.log("\n" + "Ovni de Abradolph" + "\n");
  ufosPark.dispatch(abradolph)
  console.log("Ovni de Abradolph: " + ufosPark.getUfoOf(abradolph.number));
  console.log("Credito de Abradolph: " + abradolph.credit);

  console.log("\n" + "Abradolph quiere otro ovni" + "\n");
  ufosPark.dispatch(abradolph)
  console.log("Su credito no ha cambiado: " + abradolph.credit);
  console.log("Ovni de Abradolph: " + ufosPark.getUfoOf(abradolph.number));

  // UfosPark GearHead

  console.log("<------------------------------>")
  var gearHead = new CreditCard("GearHead", "12345679");
  console.log("\n" + "Tarjeta de GearHead" + "\n");
  gearHead.pay(3000)
  console.log(gearHead);
  
  console.log("Su credito es cero: " + gearHead.credit);
  ufosPark.dispatch(gearHead)
  console.log("No puede reservar ovni: " + ufosPark.getUfoOf(gearHead.number));

  // UfosPark Squanchy

  console.log("<------------------------------>")
  var squanchy = new CreditCard("Squanchy", "12345677");
  console.log("\n" + "Tarjeta de Squanchy" + "\n");
  console.log(squanchy);
  ufosPark.dispatch(squanchy)
  console.log("Su credito es: " + squanchy.credit);
  console.log("Su ovni es: " + ufosPark.getUfoOf(squanchy.number));

  // UfosPark Morty

  console.log("<------------------------------>")
  var morty = new CreditCard("Morty", "12345676");
  console.log("\n" + "Tarjeta de Morty" + "\n");
  console.log(morty);

  ufosPark.dispatch(morty)
  console.log("Su credito no ha cambiado: " + morty.credit);
  console.log("No hay ovni Morty: " + ufosPark.getUfoOf(morty.number));

  // Flota de ovnis

  console.log("<------------------------------>")
  console.log(ufosPark);

  // CrystalExpender

  console.log("<------------------------------>")
  var crystalExpender = new CrystalExpender(5, 50);
  console.log("\n" + "Packs" + "\n");
  console.log(crystalExpender);

  // Expender Abradolph

  console.log("<------------------------------>")
  console.log("\n" + "Abradolph compra su pack" + "\n");
  crystalExpender.dispatch(abradolph)
  console.log("Packs: " + crystalExpender.stock);
  console.log("Credito de Abradolph: " + abradolph.credit);

  // Expender GearHead

  console.log("<------------------------------>")
  console.log("\n" + "GearHead sin credito para su pack" + "\n");
  crystalExpender.dispatch(gearHead)
  console.log("Packs: " + crystalExpender.stock);
  console.log("Credito de GearHead: " + gearHead.credit);

  // Receptivo
  var receptivo = singletonReceptivo.getReceptivo();
  console.log("<------------------------------>")
  console.log("Llega Squanchy");
  console.log("Llega GearHead");
  console.log("Llega Birdpearson!");
  console.log("\n" + "Morty quiere pack y ovni pero no quedan :(" + "\n");

  // Rick menu!!
  console.log("<------------------------------>")
  var menu = new RickMenu(menuJson.China.menu1.stck, menuJson.China.menu1.price);
  // Registrar el menu
  receptivo.register(menu);
  console.log("\n" + "Pedidos de RickMenus:");
  console.log(menu);

