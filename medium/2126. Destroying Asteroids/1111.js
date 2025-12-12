/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function (mass, asteroids) {
  asteroids = asteroids.sort((a, b) => a - b);
  for (const asteroid of asteroids) {
    if (mass <= asteroid) return false;
    mass += asteroid;
  }
  return true;
};
let mass = 10;
let asteroids = [3, 9, 19, 5, 21];
console.log(asteroidsDestroyed(mass, asteroids));
