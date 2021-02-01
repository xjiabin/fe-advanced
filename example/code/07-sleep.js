// Promise
function sleep1(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

sleep1(1000).then(() => {
  console.log('sleep 1s')
})

// Generator
function* sleep2(time) {
  yield new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

sleep2(2000)
  .next()
  .value.then(() => {
    console.log('sleep 2s')
  })

async function sleep3(time) {
  await sleep1(time)
  console.log('sleep 3s')
}

sleep3(3000)

// ES5
function sleep4(time, callback) {
  setTimeout(() => {
    callback && callback()
  }, time)
}
sleep4(4000, () => console.log('sleep 4s'))
