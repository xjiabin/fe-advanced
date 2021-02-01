// (5).add(3).minus(2)

Number.prototype.add = function(number) {
  return this + number
}
Number.prototype.minus = function(number) {
  return this - number
}

console.log((0.1).add(0.2).minus(0))
