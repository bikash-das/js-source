// reassignment of an object doesn't work inside function. But regular assignment works
// also if we change a attribute's value inside function, the value is changed
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};
// Write your code below
let greenEnergy = obj /*object as param */ => {
  obj['Fuel Type'] = 'avocado oil';
};

let remotelyDisable = obj /*object as param*/ => {
  obj['disabled'] = true;
};

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);
