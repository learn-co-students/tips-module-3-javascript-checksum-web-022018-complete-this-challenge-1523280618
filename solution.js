function checksum (arr){
  let total = 0
  for (const el of arr){
    el.sort()
    let diff = el[el.length-1] - el[0]
    total += diff
  }
  return total
}
