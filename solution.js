function checksum (spreadsheet){
  const rows = spreadsheet.length
  const columns = spreadsheet[0].length

  let checksum = 0

  for (let i = 0; i < rows; i++){
    const row = spreadsheet[i]

    let min = row[0]
    let max = row[0]
    for (let j = 0; j < columns; j++){
      if (row[j] < min){
        min = row[j]
      } else if (row[j] > max){
        max = row[j]
      }
    }
    checksum += max - min
  }




  return checksum
}
