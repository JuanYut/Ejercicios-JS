var uniqueInOrder = function(iterable){
  if (!Array.isArray(iterable)) 
    iterable = iterable.split('')

  return newArray = iterable.filter( (el,i) => iterable[i+1] !== el)
}

var uniqueInOrder02 = function(iterable){
  iterable = [...iterable]
  return newArray = iterable.filter( (el,i) => iterable[i+1] !== el)
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1,2,'a','a']))