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
import sand from "./sand.png";
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


const assets = { logo, phoneIcon, mailIcon, locationIcon, clockIcon, LitemailIcon, LitephoneIcon, dehero, call, quote,
     delivery, solar, sand, realestate, paints, interior, furniture, flooring, building, alteration, filling, jelly, loans };

const products = [
  { id: 1, name: "M-Sand", category: "Sand", image: assets.sand },
  { id: 2, name: "Rough Sand", category: "Sand", image: assets.sand },
  { id: 3, name: "Nice Sand", category: "Sand", image: assets.sand },
  { id: 4, name: "River Sand", category: "Sand", image: assets.sand },
  { id: 5, name: "White M-Sand", category: "Sand", image: assets.sand },
  { id: 6, name: "Filling Sand", category: "Basement Filling Materials", image: assets.solar },
  { id: 7, name: "Hill Soil", category: "Basement Filling Materials", image: assets.solar },
  { id: 8, name: "Red Soil", category: "Basement Filling Materials", image: assets.solar },
  { id: 9, name: "Rubbish", category: "Basement Filling Materials", image: assets.solar },
  { id: 10, name: "Milling", category: "Basement Filling Materials", image: assets.solar },
  { id: 11, name: "Dust", category: "Basement Filling Materials", image: assets.solar },
  { id: 12, name: "Flyash Dust", category: "Basement Filling Materials", image: assets.solar },
  { id: 13, name: "1/2 Jelly", category: "Jelly", image: assets.solar },
  { id: 14, name: "1 1/2 Jelly", category: "Jelly", image: assets.solar },
  { id: 15, name: "3/4 Jelly", category: "Jelly", image: assets.solar },
  { id: 16, name: "Over 3/4 Jelly", category: "Jelly", image: assets.solar },
  { id: 17, name: "Baby", category: "Jelly", image: assets.solar },
  { id: 18, name: "Chips", category: "Jelly", image: assets.solar },
  { id: 19, name: "GSB", category: "Jelly", image: assets.solar },
  { id: 20, name: "Wetmix", category: "Jelly", image: assets.solar },
  { id: 21, name: "Granite", category: "Flooring Materials", image: assets.flooring },
  { id: 22, name: "Parking Stone", category: "Flooring Materials", image: assets.flooring },
  { id: 23, name: "Tiles", category: "Flooring Materials", image: assets.flooring },
  { id: 24, name: "Marbles", category: "Flooring Materials", image: assets.flooring },
  { id: 25, name: "Monuments", category: "Flooring Materials", image: assets.flooring },
  { id: 26, name: "Cool Roof Tiles", category: "Flooring Materials", image: assets.flooring },
  { id: 27, name: "AAC Blocks", category: "Building Structure Materials", image: "/assets/aac-blocks.jpg" },
  { id: 28, name: "Bricks", category: "Building Structure Materials", image: "/assets/bricks.jpg" },
  { id: 29, name: "Flyash Bricks", category: "Building Structure Materials", image: "/assets/flyash-bricks.jpg" },
  { id: 30, name: "Paver Blocks", category: "Building Structure Materials", image: "/assets/paver-blocks.jpg" },
  { id: 31, name: "Modular Kitchen", category: "Interior Design", image: "/assets/modular-kitchen.jpg" },
  { id: 32, name: "Wardrobe", category: "Interior Design", image: "/assets/wardrobe.jpg" },
  { id: 33, name: "False Ceiling", category: "Interior Design", image: "/assets/false-ceiling.jpg" },
  { id: 34, name: "Wall Panels", category: "Interior Design", image: "/assets/wall-panels.jpg" },
  { id: 35, name: "Furniture", category: "Interior Design", image: "/assets/interior-furniture.jpg" },
  { id: 36, name: "Personal Loan", category: "Loans", image: "/assets/personal-loan.jpg" },
  { id: 37, name: "Business Loan", category: "Loans", image: "/assets/business-loan.jpg" },
  { id: 38, name: "Home Loan", category: "Loans", image: "/assets/home-loan.jpg" },
  { id: 39, name: "Land Buying and Selling", category: "Real Estate", image: "/assets/land.jpg" },
  { id: 40, name: "Lease and Rental", category: "Real Estate", image: "/assets/lease-rental.jpg" },
  { id: 41, name: "Building Moving", category: "Building Alteration", image: "/assets/building-moving.jpg" },
  { id: 42, name: "Building Lifting", category: "Building Alteration", image: "/assets/building-lifting.jpg" },
  { id: 43, name: "Building Demolition", category: "Building Alteration", image: "/assets/building-demolition.jpg" },
  { id: 44, name: "Burma Teak Wood and Furnitures", category: "Furniture", image: "/assets/burma-teak.jpg" },
  { id: 45, name: "Berger Paints", category: "Decorative Paints", image: "/assets/berger-paints.jpg" },
  { id: 46, name: "On-Grid and Off-Grid Solar Panels with Subsidy", category: "Solar Electrical Roofing", image: "/assets/solar-panels.jpg" },
];

export {products};
export default assets;