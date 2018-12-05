function findEvenIndex(array){

  let sumL = 0
  let sumR = 0
  let resuFinal = 0
  let arrayL
  let arrayR

  if(array.length > 2) {
    let arrayFirst = array.slice(1, array.length+1)
    let arrayLast = array.slice(0, array.length-1)
    if((arrayFirst.reduce((a,b) => a + b)) === 0 || (arrayLast.reduce((a,b) => a + b)) === 0) {
      resuFinal = 0
    } else {
      for(let i=1; i< array.length; i++) {
        arrayL = array.slice(0, i)
        arrayR = array.slice(i+1, array.length+1)
  
        sumL = arrayL.reduce((a,b) => a + b)
        sumR = arrayR.reduce((a,b) => a + b)
  
        if(sumL === sumR) {
          resuFinal = i
          break
        }
      }
    }
  } else if(array.length === 2) {
    if(array[0] === 0) {
      resuFinal = 1
    } else if (array[1] === 0) {
      resuFinal = 0
    }
  }
  return resuFinal
}

array01 = [1,2,3,4,3,2,1]
array02 = [1,100,50,-51,1,1]
array03 = [20,10,-80,10,10,15,35]
console.log(findEvenIndex(array01)) // 3
console.log(findEvenIndex(array02)) // 1
console.log(findEvenIndex(array03)) // 0

array04 = [1,1,1,1,-4,8]
console.log(findEvenIndex(array04)) // 0
array05 = []
console.log(findEvenIndex(array05)) // 0
array06 = [1]
console.log(findEvenIndex(array06)) // 0
array07 = [0,1]
console.log(findEvenIndex(array07)) // 1
array08 = [3,1,3]
console.log(findEvenIndex(array08)) // 1
// array09 = [3,1,3,2]
// console.log(findEvenIndex(array09)) // -1