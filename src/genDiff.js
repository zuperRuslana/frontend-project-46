import parse from './parsers.js'
import buildDiff from './buildDiff.js'
import getFormatter from './formatters/formatPicker.js'
import { resolvePath } from './resolvePath.js'

export default function genDiff(filepath1, filepath2, formatName = 'stylish') {
  const filepath1Resolved = resolvePath(filepath1)
  const filepath2Resolved = resolvePath(filepath2)
  const data1 = parse(filepath1Resolved)
  const data2 = parse(filepath2Resolved)
  const diff = buildDiff(data1, data2)

  const format = getFormatter(formatName)
  return format(diff)
}
