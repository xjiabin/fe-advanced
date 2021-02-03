const intersect = (arr1, arr2) => [
  ...new Set([...arr1].filter((v) => arr2.includes(v)))
]

const arr2 = [1, 1]
const arr1 = [1]

// console.log(intersect(arr1, arr2))

// 空间换时间：
// 用个 Hash 表来存数组 1 的元素以及出现的个数（此处需要遍历 n 次，并存一个 n 级别的空间）。
// 遍历数组2，发现数组 2 里有 Hash 表里的值就存到 Result 数组里，并把 Hash 表内该值次数减一（为0之后就Delete）。
// 如果不存在 Hash 表里，就跳过。这样时间复杂度就是(m+n)
const getIntersection = (arr1, arr2) => {
  const maps = {}
  const result = []

  // 存储数组 arr1 的元素以及出现的个数
  arr1.forEach((num) => {
    // 存在，数量加1
    if (maps[num]) {
      maps[num] += 1
    } else {
      maps[num] = 1
    }
  })

  // 遍历数组2
  arr2.forEach((num) => {
    // 如果 num 存在于 Hash 表里就存到 Result 数组里
    if (maps[num]) {
      result.push(num)
      maps[num] -= 1
      // 个数未为 0 就删除
      if (maps[num] === 0) {
        delete maps[num]
      }
    }
  })

  return result
}

const getIntersection2 = (arr1, arr2) => {
  const result = []

  arr1.forEach((num) => {
    const idx = arr2.indexOf(num)
    if (idx >= 0) {
      result.push(num)
      arr2.splice(idx, 1)
    }
  })
  return result
}

console.log(getIntersection2(arr1, arr2))
