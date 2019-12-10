let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
let capFave = spaceship['crew']['captain']['favorite foods'][0];

let passenger  = [{
  firstName: "John",
  lastName: "Doe",
  age: 50
},{
  firstName: "John",
  lastName: "Doe 2",
  age: 50
}];

spaceship.passengers = passenger;

let firstPassenger = spaceship.passengers[0];

console.log(firstPassenger);
