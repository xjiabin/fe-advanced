/**
 * 冒泡排序
 */

function bubbleSort(arr) {
  // console.time('sort1')
  const len = arr.length
  for (let i = 0; i < len; i++) {
    console.log(`第${i + 1}趟`)
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
      console.log(`    第${j + 1}次`, arr)
    }
  }

  // console.timeEnd('sort1')
  return arr
}

function bubbleSort2(arr) {
  // console.time('sort2')
  const len = arr.length
  for (let i = 0; i < len; i++) {
    console.log(`第${i + 1}趟`)
    // 假设每趟都已经是有序的了
    let finish = true
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        // 如果出现有元素交换，则表明此躺可能没有完成排序
        finish = false
      }
      console.log(`    第${j + 1}次`, arr)
    }
    // 如果当前趟都没有进行元素的交换，证明前面一趟比较已经排好序
    // 直接退出循环
    if (finish) break
  }
  // console.timeEnd('sort2')
  return arr
}

function bubbleSort3(arr) {
  // console.time('sort3')
  let i = arr.length - 1
  let n = 0
  while (i > 0) {
    console.log(`第${++n}趟`)
    let pos = 0
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 记录交换的位置
        pos = j
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
      console.log(`    第${j + 1}次`, arr)
    }
    i = pos
  }
  // console.timeEnd('sort3')
  return arr
}

const arr = [6, 9, 8, 3, 2, 11, 15, 16, 18, 19]
bubbleSort3(arr)
