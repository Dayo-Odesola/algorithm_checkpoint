const nam = "my name is daniel"

console.log(nam.split(/\s+/).length)
console.log(nam.length);
const vowel = (sentence) =>{
  return  sentence.match(/[aeiou]/gi)
  ? sentence.match(/[aeiou]/gi).length
  :0
}

console.log(vowel(nam))