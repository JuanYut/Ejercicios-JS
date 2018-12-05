function maskify(cc) {  
  if(cc.length > 4){
    let cc2 = ''
    for(let i=0; i<cc.length-4; i++){
      cc2 += '#'
    }
    let array = cc.slice(cc.length-4,cc.length+1)
    return cc2 += array
  } else {
    return cc
  }
}

console.log(maskify("1276381253871245616"))
console.log(maskify("125616"))
console.log(maskify("1"))
console.log(maskify(""))