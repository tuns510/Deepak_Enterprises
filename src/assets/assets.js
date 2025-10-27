import logo from "./delogo.png";
import phoneIcon from "./phoneIcon.png";
import LitephoneIcon from "./litephoneIcon.png";
import mailIcon from "./emailIcon.png";
import LitemailIcon from "./liteemailIcon.png";
import clockIcon from "./clockIcon.png";
import locationIcon from "./locationIcon.png";
import dehero from "./dehero.png";
import call from "./call.png";
import quote from "./quote.png";
import delivery from "./delivery.png";
import solar from "./solar.png";
import sand from "./sand.jpg";
import realestate from "./realestate.png";
import paints from "./paints.png";
import interior from "./interior.png";
import furniture from "./furniture.png";
import flooring from "./flooring.png";
import building from "./building.png";
import alteration from "./alteration.png";
import filling from "./filling.jpg";
import jelly from "./jelly.jpg";
import loans from "./loans.jpg";
import msand from "./m-sand.jpg";
import nicesand from "./nice-sand.jpg";
import riversand from "./river-sand.jpg";
import roughsand from "./rough-sand.jpg";
import whitemsand from "./white-msand.jpg";
import granite from "./granite.jpg";
import marble from "./marble.jpg";
import monument from "./monument.webp";
import parkingstone from "./parking-stone.jpeg";
import tiles from "./tiles.jpg";
import coolroof from "./coolroof.jpeg";
import falsec from "./false.jpg";
import wallpanels from "./wallpanels.jpg";
import wardrobe from "./wardrobe.jpg";
import wood from "./wood.jpg";
import modular from "./modular.jpg";
import aac from "./aac.jpg";
import bricks from "./bricks.jpg";
import flyash from "./flyash.jpeg";
import paver from "./paver.jpg";
import bdemolition from "./bdemolition.jpeg";
import berger from "./berger.jpg";
import blifting from "./blifting.jpeg";
import burmateak from "./burmateak.jpg";
import businessloan from "./businessloan.jpg";
import homeloan from "./homeloan.jpg";
import landfs from "./landfs.jpg";
import lease from "./lease.jpg";
import moving from "./moving.jpg";
import personalloan from "./personalloan.jpg";
import solargov from "./solargov.jpg";
import baby from "./baby.jpeg";
import chips from "./chips.jpg";
import dusts from "./dusts.jpeg";
import fillings from "./fillings.jpeg";
import flyashdust from "./flyashdust.jpg";
import gsb from "./gsb.png";
import hills from "./hills.jpg";
import reds from "./reds.jpg";
import wetmix from "./wetmix.jpeg";
import rubbishs from "./rubbishs.jpg";
import construction from "./construction.jpg";
import milling from "./milling.jpeg";
import ongoing1 from "./ongoing1.jpeg";
import ongoing2 from "./ongoing2.jpeg";
import ongoing3 from "./ongoing3.jpeg";


const assets = { logo, phoneIcon, mailIcon, locationIcon, clockIcon, LitemailIcon, LitephoneIcon, dehero, call, quote,
     delivery, solar, sand, realestate, paints, interior, furniture, flooring, building, alteration, filling, jelly,
     loans, msand, nicesand, riversand, roughsand, whitemsand, coolroof, tiles, parkingstone, monument, marble, granite,
    falsec, wallpanels, wardrobe, wood, modular, aac, bricks, flyash, paver, solargov, personalloan, moving, lease, landfs,
    homeloan, businessloan, burmateak, blifting, berger, bdemolition, baby, chips, wetmix, gsb, rubbishs, reds, hills, 
    flyashdust, fillings, dusts, construction, milling, ongoing1, ongoing2, ongoing3 };

const products = [
  { id: 1, name: "M-Sand", category: "Sand", image: assets.msand },
  { id: 2, name: "Rough Sand", category: "Sand", image: assets.roughsand },
  { id: 3, name: "Nice Sand", category: "Sand", image: assets.nicesand },
  { id: 4, name: "River Sand", category: "Sand", image: assets.riversand },
  { id: 5, name: "White M-Sand", category: "Sand", image: assets.whitemsand },
  { id: 6, name: "Filling Sand", category: "Basement Filling Materials", image: assets.fillings },
  { id: 7, name: "Hill Soil", category: "Basement Filling Materials", image: assets.hills },
  { id: 8, name: "Red Soil", category: "Basement Filling Materials", image: assets.reds },
  { id: 9, name: "Rubbish", category: "Basement Filling Materials", image: assets.rubbishs },
  { id: 10, name: "Milling", category: "Basement Filling Materials", image: assets.milling },
  { id: 11, name: "Dust", category: "Basement Filling Materials", image: assets.dusts },
  { id: 12, name: "Flyash Dust", category: "Basement Filling Materials", image: assets.flyashdust },
  { id: 13, name: "1/2 Jelly", category: "Jelly", image: assets.jelly },
  { id: 14, name: "1 1/2 Jelly", category: "Jelly", image: assets.jelly },
  { id: 15, name: "3/4 Jelly", category: "Jelly", image: assets.jelly },
  { id: 16, name: "Over 3/4 Jelly", category: "Jelly", image: assets.jelly },
  { id: 17, name: "Baby", category: "Jelly", image: assets.baby },
  { id: 18, name: "Chips", category: "Jelly", image: assets.chips },
  { id: 19, name: "GSB", category: "Jelly", image: assets.gsb },
  { id: 20, name: "Wetmix", category: "Jelly", image: assets.wetmix },
  { id: 21, name: "Granite", category: "Flooring Materials", image: assets.granite },
  { id: 22, name: "Parking Stone", category: "Flooring Materials", image: assets.parkingstone },
  { id: 23, name: "Tiles", category: "Flooring Materials", image: assets.tiles },
  { id: 24, name: "Marbles", category: "Flooring Materials", image: assets.marble },
  { id: 25, name: "Monuments", category: "Flooring Materials", image: assets.monument },
  { id: 26, name: "Cool Roof Tiles", category: "Flooring Materials", image: assets.coolroof },
  { id: 27, name: "AAC Blocks", category: "Building Structure Materials", image: assets.aac },
  { id: 28, name: "Bricks", category: "Building Structure Materials", image: assets.bricks },
  { id: 29, name: "Flyash Bricks", category: "Building Structure Materials", image: assets.flyash },
  { id: 30, name: "Paver Blocks", category: "Building Structure Materials", image: assets.paver },
  { id: 31, name: "Modular Kitchen", category: "Interior Design", image: assets.modular },
  { id: 32, name: "Wardrobe", category: "Interior Design", image: assets.wardrobe },
  { id: 33, name: "False Ceiling", category: "Interior Design", image: assets.falsec },
  { id: 34, name: "Wall Panels", category: "Interior Design", image: assets.wallpanels },
  { id: 35, name: "Furniture", category: "Interior Design", image: assets.wood },
  { id: 36, name: "Personal Loan", category: "Loans", image: assets.personalloan },
  { id: 37, name: "Business Loan", category: "Loans", image: assets.businessloan },
  { id: 38, name: "Home Loan", category: "Loans", image: assets.homeloan },
  { id: 39, name: "Land Buying and Selling", category: "Real Estate", image: assets.landfs },
  { id: 40, name: "Lease and Rental", category: "Real Estate", image: assets.lease },
  { id: 41, name: "Building Moving", category: "Building Alteration", image: assets.moving },
  { id: 42, name: "Building Lifting", category: "Building Alteration", image: assets.blifting },
  { id: 43, name: "Building Demolition", category: "Building Alteration", image: assets.bdemolition },
  { id: 44, name: "Burma Teak Wood and Furnitures", category: "Furniture", image: assets.burmateak },
  { id: 45, name: "Berger Paints", category: "Decorative Paints", image: assets.berger },
  { id: 46, name: "On-Grid and Off-Grid Solar Panels with Subsidy", category: "Solar Electrical Roofing", image: assets.solargov },
  { id: 47, name: "Ongoing Project", category: "Building Constructions", image: assets.ongoing1 },
  { id: 48, name: "Ongoing Project", category: "Building Constructions", image: assets.ongoing2 },
  { id: 49, name: "Ongoing Project", category: "Building Constructions", image: assets.ongoing3 },


];

export {products};
export default assets;