function _new(fn, ...args) {
  // 以构造函数的原型创建空对象
  const obj = Object.create(fn.prototype)
  const result = fn.apply(obj, [...args])

  return typeof result === 'object' ? result : obj
}

function Otaku(name, age) {
  this.strength = 60;
  this.age = age;

  return {
    name: name,
    habit: 'Games'
  }
}

var person = _new(Otaku, 'Kevin', '18')

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // undefined
console.log(person.age) // undefined
