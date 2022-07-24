//Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. 

//The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.

function reverseArray(arr) {
  let result = [];
  for(let i = arr.length; i > 0 ; i--) {
    result.push(arr.pop()); 
  }
  return result;
}

console.log(reverseArray(["A", "B", "C"]));



//The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

function reverseArrayInPlace(arr) {
  for(let i = 0; i < Math.floor(arr.length / 2) ; i++) {
    let holder = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = arr[i]
    arr[i] = holder;
  }
  return arr;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);



