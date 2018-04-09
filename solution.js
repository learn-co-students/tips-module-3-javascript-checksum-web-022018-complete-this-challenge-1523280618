function checksum (spreadsheet){
  const rows = spreadsheet.length
  const columns = spreadsheet[0].length

  let checksum = 0

  for (let i = 0; i < rows; i++){
    const row = spreadsheet[i]
    checksum += Math.max(...row) - Math.min(...row)
  }

  return checksum


  // [
  //   [409, 194, 207, 470, 178],
  //   [454, 235, 333, 511, 103],
  //   [474, 293, 525, 372, 408],
  //   [428, 4321, 2786, 6683, 3921],
  //   [265, 262, 6206, 2207, 5712]
  // ]
  //
  // => 13131




}
