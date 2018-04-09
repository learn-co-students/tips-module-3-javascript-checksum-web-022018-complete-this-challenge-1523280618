function checkSum(array){
newArray = []
checkSum = 0
  for (const element in array){
  newArray.push(array[element].slice().sort(function(a,b){return a - b}))
  }
  for (const element in newArray){
  checkSum +=(newArray[element][newArray[element].length - 1] - newArray[element][0])
  }
return checkSum
}
