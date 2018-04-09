function checksum (arr){
  let total = 0
  for (const el of arr){
    el.sort((num1, num2) => (num1-num2))
    console.log(el)
    let diff = el[el.length-1] - el[0]
    total += diff
  }
  return total

}
