//imports 
var CreditCard =  require("./creditCard/creditCard");
var singleUfosPark = require("./ufosPark/ufosPark");
var CrystalExpender = require("./crystalExpender/crystalExpender");
var RickMenu = require("./rickMenu/rickMenu");
var singletonReceptivo = require("./receptivo/receptivo");
var menuJson = require("./data/menus.json");
var expenderMock = require("./data/expenderMock.json");
var pack = require("./data/packs.json");
var ufosMock = require("./data/ufosMock.json")

var abradolph = new CreditCard("Abradolph", "12345678");
  
  console.log("\n" + "Tarjeta de Abradolph" + "\n");
  console.log(abradolph);
  

  // UfosPark

  console.log("<------------------------------>")
  var ufosPark = singleUfosPark.getPark();
  let ufos = ufosMock.park.stock;
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
  console.log("No puede reservar ovni: " + ufosPark.getUfoOf(gearHead));

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
  console.log("Su credito es: " + morty.credit);
  console.log("Su ovni Morty: " + ufosPark.getUfoOf(morty.number));

  // Flota de ovnis

  console.log("<------------------------------>")
  console.log(ufosPark);

  // CrystalExpender

  console.log("<------------------------------>")
  var crystalExpender = new CrystalExpender(expenderMock.crystal.stock, expenderMock.crystal.price);
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
  crystalExpender.dispatch(gearHead);
  console.log("Packs: " + crystalExpender.stock);
  console.log("Credito de GearHead: " + gearHead.credit);

  // Receptivo
  var birdperson = new CreditCard("BirdPerson", "12345675");

  var receptivo = singletonReceptivo.getReceptivo();
  packs = new CrystalExpender(pack[0].stock, pack[0].precio);

  console.log("<------------------------------>");
  console.log("Se pone en marcha el receptivo");
  console.log(packs);
  console.log(ufosPark);

  receptivo.register(packs);
  receptivo.register(ufosPark);

  console.log("\n" + "Llega Squanchy con " + squanchy.credit + " creditos" + "\n");
  receptivo.dispatch(squanchy);
  console.log(squanchy.number);
  console.log("Packs: " + packs.stock);
  console.log("Ovni: " + ufosPark.getUfoOf(squanchy));
  console.log("Creditos: " + squanchy.credit);

  console.log("\n" + "Llega GearHead con " + gearHead.credit + " creditos" + "\n");
  receptivo.dispatch(gearHead);
  console.log(gearHead.number);
  console.log("Packs: " + packs.stock);
  console.log("Ovni: " + ufosPark.getUfoOf(gearHead));
  console.log("Creditos: " + gearHead.credit);


  console.log("\n" + "Llega Birdperson! tiene " + birdperson.credit + " creditos" + "\n");
  receptivo.dispatch(birdperson);
  console.log(birdperson.number);
  console.log("Packs: " + packs.stock);
  console.log("Ovni: " + ufosPark.getUfoOf(birdperson));
  console.log("Creditos: " + birdperson.credit);
  console.log("\n");
  console.log(ufosPark);
  
  // Rick menu!!
  console.log("<------------------------------>");
  var menu = new RickMenu(menuJson.China.menu1.stck, menuJson.China.menu1.price);
  // Registrar el menu
  receptivo.register(menu);
  console.log("\n" + "Pedidos de RickMenus:" + "\n");
  console.log(menu);
  console.log("\n" + "Creditos de los invitados después de comprar el menú: " + " \n");

  let cards = [abradolph, squanchy, birdperson, morty, gearHead];

  for(let card of cards) {
    receptivo.dispatch(card);
    console.log("\n");
    console.log(card);
    console.log("\n")
  }

  console.log(menu)