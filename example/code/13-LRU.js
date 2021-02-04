class LRUCache {
  constructor(max) {
    this.max = max
    this.cache = Object.create(null)
    this.keys = []
  }

  put(key, value) {
    if (this.cache[key]) {
      // 存在即更新
      this.remove(key)
      this.keys.push(key)
    } else {
      // 不存在就加入
      // 判断是否超过最大容量
      if (this.max && this.keys.length >= this.max) {
        this.removeCache(this.keys[0])
      }

      this.cache[key] = value
      this.keys.push(key)
    }
  }

  get(key) {
    let result = -1

    if (this.cache[key]) {
      this.remove(key)
      this.keys.push(key)
      result = this.cache[key]
    }

    console.log(result)
    return result
  }

  remove(key) {
    if (this.keys.length) {
      const idx = this.keys.indexOf(key)
      if (idx > -1) {
        this.keys.splice(idx, 1)
      }
    }
  }

  removeCache(key) {
    this.cache[key] = null
    this.remove(key)
  }
}

class LRUCache2 {
  constructor(max) {
    this.max = max
    this.cache = new Map()
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else {
      // 达到缓存容量限制
      if (this.max && this.cache.size >= this.max) {
        // 删除第一个
        this.cache.delete(this.cache.keys().next().value)
      }
    }

    this.cache.set(key, value)
  }

  get(key) {
    let result = -1
    if (this.cache.has(key)) {
      const value = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, value)
      result = value
    }

    console.log(result)
    return result
  }
}

const cache = new LRUCache2(2 /* 缓存容量 */)

cache.put(1, 1)
cache.put(2, 2)
cache.get(1) // 返回  1
cache.put(3, 3) // 该操作会使得密钥 2 作废
cache.get(2) // 返回 -1 (未找到)
cache.put(4, 4) // 该操作会使得密钥 1 作废
cache.get(1) // 返回 -1 (未找到)
cache.get(3) // 返回  3
cache.get(4) // 返回  4
