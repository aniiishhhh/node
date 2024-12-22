const s = require('lodash')

const items= [1,[2,[3,[4]]]]
const newItems = s.flattenDeep(items)
console.log(newItems)