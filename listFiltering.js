function filter_list01(list) {
  return list.filter(v => {
    return typeof v == 'number'
  })
}

function filter_list02(list) {
  return list.filter(el => Number.isInteger(el))
}

function filter_list03(list) {
  return list.filter(v => !v.trim)
}

let arrayP = [0,1,2,'a','b',4]
console.log( filter_list01(arrayP) )