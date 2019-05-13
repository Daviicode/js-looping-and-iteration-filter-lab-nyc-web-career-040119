// Code your solution in this file
function findMatching (drivers, name) {
  let newdriver =  drivers.filter( function (driver) { driver.toLowerCase() === name.toLowerCase();} );
  return newdriver;
}

function fuzzyMatch (drivers, name) {
  let newdriver = drivers.filter( function (driver) {driver.slice(0..1)})
}