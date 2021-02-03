const obj = { 1: 222, 2: 123, 5: 888 }

const result = Array.from({ length: 12 }).map(
  (_, index) => (_ = obj[index + 1] || null)
)

console.log(result)
