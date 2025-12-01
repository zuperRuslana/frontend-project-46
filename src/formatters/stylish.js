function stringify(value, depth) {
  const indentSize = depth * 4 - 2
  const indent = ' '.repeat(indentSize)
  const closeIndent = ' '.repeat(indentSize - 2)

  if (value === null || typeof value !== 'object') {
    return String(value)
  }
  if (Object.getPrototypeOf(value) === Object.prototype) {
    const keys = Object.keys(value)
    const lines = keys.map((key) => {
      const innerValue = value[key]
      return `${indent}  ${key}: ${stringify(innerValue, depth + 1)}`
    })

    return ['{', ...lines, `${closeIndent}}`].join('\n')
  }
  return String(value)
}

export function stylisher(tree, depth = 1) {
  const indent = ' '.repeat(depth * 4 - 2)
  const closeIndent = ' '.repeat(depth * 4 - 4)
  const styledText = []
  styledText.push('{')

  tree.forEach((node) => {
    if (node.type === 'added') {
      styledText.push(
        `${indent}+ ${node.key}: ${stringify(node.value, depth + 1)}`,
      )
    }
    if (node.type === 'removed') {
      styledText.push(
        `${indent}- ${node.key}: ${stringify(node.value, depth + 1)}`,
      )
    }
    if (node.type === 'unchanged') {
      styledText.push(
        `${indent}  ${node.key}: ${stringify(node.value, depth + 1)}`,
      )
    }
    if (node.type === 'changed') {
      styledText.push(
        `${indent}- ${node.key}: ${stringify(node.value1, depth + 1)}`,
      )
      styledText.push(
        `${indent}+ ${node.key}: ${stringify(node.value2, depth + 1)}`,
      )
    }

    if (node.type === 'nested') {
      styledText.push(
        `${indent}  ${node.key}: ${stylisher(node.children, depth + 1)}`,
      )
    }
  })
  styledText.push(`${closeIndent}}`)
  return styledText.join('\n')
}
