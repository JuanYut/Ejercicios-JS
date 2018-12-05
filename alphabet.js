function findMissingLetter(array)
{
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                  'u', 'v', 'w', 'x', 'y', 'z']
         
  let yourArray = array.map(letter => letter.toLowerCase())
  let shortAlphabet
  let missingLetter = '?'

  for(let i=0; i<alphabet.length; i++){
    if(yourArray[0] === alphabet[i]){ // encontre el inicio para comparar.
      shortAlphabet = alphabet.slice(i,(i + 1 + yourArray.length))

      for(let j=0; j<shortAlphabet.length; j++){
        if(yourArray[j] != shortAlphabet[j]){
          missingLetter = shortAlphabet[j]
          break
        }
      }

    }
  }
  return missingLetter;
}
array1 = ['o', 'Q', 'r', 'S']
console.log(findMissingLetter(array1))