class LazyManClass {
  constructor(name) {
    this.name = name
    this.taskList = []

    console.log(`Hi I am ${name}`)
    // 使用 setTimeout 将 next 的调用改为异步，以达到 lazy 的目的
    setTimeout(() => {
      this.next()
    }, 0)
  }

  sleepFirst(time) {
    const task = () => {
      setTimeout(() => {
        console.log(`等待了${time}秒`)
        this.next()
      }, time * 1000)
    }
    this.taskList.unshift(task)
    return this
  }

  eat(food) {
    const task = () => {
      console.log(`I am eating ${food}`)
      this.next()
    }
    this.taskList.push(task)
    return this
  }

  sleep(time) {
    const task = () => {
      setTimeout(() => {
        console.log(`等待了${time}秒`)
        this.next()
      }, time * 1000)
    }
    this.taskList.push(task)
    return this
  }

  next() {
    // 取出第一个任务执行
    const task = this.taskList.shift()
    console.log(this.taskList)
    task && task()
  }
}

function LazyMan(name) {
  return new LazyManClass(name)
}
// LazyMan('Tony')
// Hi I am Tony

// LazyMan('Tony')
//   .sleep(10)
//   .eat('lunch')
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

// LazyMan('Tony')
//   .eat('lunch')
//   .sleep(10)
//   .eat('dinner')
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony')
  .eat('lunch')
  .eat('dinner')
  .sleepFirst(5)
  .sleep(10)
  .eat('junk food')
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
