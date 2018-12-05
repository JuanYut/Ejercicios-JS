function highAndLow(numbers){
  let array = numbers.split(" ")
  return Math.max(...array) + " " + Math.min(...array)
}

console.log(highAndLow("1 9 3 4 -5")) // 9 -5