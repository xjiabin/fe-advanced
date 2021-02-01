// 拷贝函数

function getEmptyTarget(o) {
  // 对象
  if (Object.prototype.toString.call(o) === '[object Object]') {
    return {}
  }
  // 数组
  if (Object.prototype.toString.call(o) === '[object Array]') {
    return []
  }

  return o
}

// 深度优先
function deepCopyDFS(origin) {
  const stack = []
  const map = new Map()

  const target = getEmptyTarget(origin)
  if (target !== origin) {
    // 将源和目标放入数组，并推入栈中
    stack.push([origin, target])
    map.set(origin, target)
  }

  while (stack.length) {
    // 弹出栈顶的元素
    const [o, t] = stack.pop()
    // 遍历源对象
    for (let key in o) {
      // console.log('key', key)

      if (map.get(o[key])) {
        t[key] = map.get(o[key])
        continue
      }

      t[key] = getEmptyTarget(o[key])
      if (t[key] !== o[key]) {
        // 入栈
        stack.push([o[key], t[key]])
        map.set(o[key], t[key])
      }
    }
  }

  return target
}

// 广度优先
function deepCopyBFS(origin) {
  let queue = []
  let map = new Map() // 记录已经出现过的对象，用于处理环

  // 创建一个空的 origin
  let target = getEmptyTarget(origin)
  // 如果 target 和 origin 不相同，则视为是 对象/数组
  if (target !== origin) {
    // 将源和目标放进数组，然后加入队列中
    queue.push([origin, target])
    // 记录出现的对象
    map.set(origin, target)
  }

  while (queue.length) {
    // 取出第一个 [源, 目标]
    let [o, t] = queue.shift()
    // 遍历源，将源的属性拷贝至目标
    for (let key in o) {
      // console.log('key', key)

      // 处理环
      if (map.get(o[key])) {
        // 从环中取出目标值
        t[key] = map.get(o[key])
        continue
      }

      t[key] = getEmptyTarget(o[key])
      if (t[key] !== o[key]) {
        queue.push([o[key], t[key]])
        map.set(o[key], t[key])
      }
    }
  }

  return target
}

const obj = {
  a: {
    a1: [1, 2, 3],
    a2: {
      a21: function () {
        console.log(1)
      }
    }
  },
  b: 2,
  c: {
    c1: [1, 2, 3],
    c2: {
      c21: function () {
        console.log(1)
      }
    }
  },
  d: 3
}

const circle = {}
circle.child = circle

console.log('========= 深度优先 =========')
const cpObj1 = deepCopyDFS(obj)
console.log(cpObj1)
console.log('========= 广度优先 =========')
const cpObj2 = deepCopyBFS(obj)
console.log(cpObj2)
