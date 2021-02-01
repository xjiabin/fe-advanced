const arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
const arr2 = ['A', 'B', 'C', 'D']

const result = [...arr1, ...arr2].sort((a, b) => a.charCodeAt() - b.charCodeAt())
console.log(result)