import _ from 'lodash'

const buildDiff = (data1, data2) => {
  const keysFile1 = Object.keys(data1)
  const keysFile2 = Object.keys(data2)
  const allKeys = [...keysFile1, ...keysFile2]
  const uniqueKeys = _.uniq(allKeys)
  const sortedKeys = _.sortBy(uniqueKeys)

  return sortedKeys.map((key) => {
    if (!keysFile1.includes(key) && keysFile2.includes(key)) {
      return { key, type: 'added', value: data2[key] }
    }
    if (!keysFile2.includes(key) && keysFile1.includes(key)) {
      return { key, type: 'removed', value: data1[key] }
    } 
    else {
      const value1 = data1[key]
      const value2 = data2[key]
      if (
        value1 
        && value2 
        && typeof value1 === 'object' 
        && typeof value2 === 'object' 
        && Object.getPrototypeOf(value1) === Object.prototype 
        && Object.getPrototypeOf(value2) === Object.prototype
      ) {
        return { key, type: 'nested', children: buildDiff(value1, value2) }
      }
      if (value1 === value2) {
        return { key, type: 'unchanged', value: value1 }
      } 
      else {
        return { key, type: 'changed', value1: value1, value2: value2 }
      }
    }
  })
}

export default buildDiff
