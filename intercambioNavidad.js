function intercambioNavidad(array) {
  let lastArray = []

  if (array.length === 2) {
    lastArray.push( (array[0] + '->' + array[1]) )
    lastArray.push( (array[1] + '->' + array[0]) )
  } else if (array.length === 1) {
    lastArray.push( (array[0] + '->' + array[0]) )
  } else if (array.length < 1) {
    lastArray.push(0)
  } else {
    //array = shuffle(array) // funcion para acomodar un array de forma random
    for(let i=0; i< array.length; i++) { // 0 - 3
      if ((i+2) > array.length-1)
        if( ((array.length-1) - i) === 1) 
          lastArray.push( (array[i] + '->' + array[0]) )
        else 
          lastArray.push( (array[i] + '->' + array[1]) )
      else
        lastArray.push( (array[i] + '->' + array[i+2]) )
    }
  }

  return lastArray
}

function shuffle(array) {
  var j, temp
  for (let i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
  }
  return array
}

let arrayPar = ['erik','juan','manny','chepo'] // par
let arrayImpar = ['erik','juan','manny','chepo','oto'] // impar
let array00 = [] // 0
let array01 = ['erik'] // 1
let array02 = ['erik','juan'] // 2
let array03 = ['erik','juan','manny'] // 3

console.log(intercambioNavidad(arrayPar))
console.log(intercambioNavidad(arrayImpar))
console.log(intercambioNavidad(array00))
console.log(intercambioNavidad(array01))
console.log(intercambioNavidad(array02))
console.log(intercambioNavidad(array03))