/**
 * 深度优先遍历和广度优先遍历
 */

//  深度优先遍历1
function DFS1(node, nodeList = []) {
  if (node != null) {
    nodeList.push(node)

    const children = node.children
    for (let i = 0, len = children.length; i < len; i++) {
      DFS1(children[i], nodeList)
    }
  }
  return nodeList
}

//  深度优先遍历2
function DFS2(node) {
  let nodes = []
  if (node != null) {
    nodes.push(node)

    let children = node.children
    for (let i = 0, len = children.length; i < len; i++) {
      nodes = nodes.concat(DFS2(children[i]))
    }
  }

  return nodes
}

function DFS(node) {
  const nodeList = []

  function traversal(node) {
    if (node != null) {
      // 保存当前节点
      nodeList.push(node)
      const child = node.children
      // 遍历子节点
      for (let i = 0, len = child.length; i < len; i++) {
        traversal(child[i])
      }
    }
  }

  traversal(node)

  return nodeList
}


//  广度优先遍历
function BFS1(node) {
  let nodes = []
  let stack = []
  if (node) {
    // 推入栈中
    stack.push(node)
    while (stack.length) {
      const item = stack.shift() // 弹出第一个
      nodes.push(item)
      const children = item.children
      for (let i = 0, len = children.length; i < len; i++) {
        // 将 children 推入栈中
        stack.push(children[i])
      }
    }
  }

  return nodes
}

function BFS(node) {
  const nodeList = []
  const queue = []

  traversal(node)
  return nodeList

  function traversal(node) {
    if (node != null) {
      // 添加队列
      queue.push(node)
      while (queue.length) {
        // 取出队列中的第一个节点
        const item = queue.shift()
        nodeList.push(item)
        const child = item.children
        for (let i = 0, len = child.length; i < len; i++) {
          // 将子节点加入队列
          queue.push(child[i])
        }
      }
    }
  }
}

const tree = document.getElementById('parent')

const result = DFS(tree, [])
console.log(result)
