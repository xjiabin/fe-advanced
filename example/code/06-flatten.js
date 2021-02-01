let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

function flatten(array) {
  while (array.some((i) => Array.isArray(i))) {
    array = [].concat(...array)
  }

  return array
}

function flatten1(arr = []) {
  let ret = []

  arr.forEach((item) => {
    ret = Array.isArray(item) ? ret.concat(flatten1(item)) : ret.concat(item)
  })

  return ret
}

console.log(flatten1(arr))
