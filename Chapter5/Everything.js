// Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

function every(array, test) {
  for (element of array) {
    if(!test(element)) return false
  }
  return true
}

function everySome(array, test) {
  return  !array.some((element) => !test(element) )
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true