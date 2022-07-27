/* Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
*/

function arrayToList(arr) {
  let list = null
  for (let i = arr.length -1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list
    }
  }
  return list;
}

console.log(arrayToList([10, 20,]));





//Also write a listToArray function that produces an array from a list. 

function listToArray(list) {
  let arr = []
  for(let node = list; node; node = node.rest){
    arr.push(node.value)
  }
  return arr
}


console.log(listToArray(arrayToList([10, 20, 30])));



//Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list,

function prepend(value, list) {
  return {
    value,
    rest: list
  }
}

console.log(prepend(10, prepend(20, null)));





//And nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

function nth(list, num) {
  let result
  for ( let i = 0; i <= num; i++, list = list.rest){
    if(i == num){
      result = list.value
    }
    else if(!list.rest){
      return
    }
  }
  return result
}


console.log(nth(arrayToList([10, 20, 30]), 2));


//Also write a recursive version of nth

function nthRecursive(list, num){
  let result
  let counter = 0;
  if(counter == num){
   return result = list.value;
  }
  else if(list.rest){
    counter++
    nthRecursive(list.rest, num)
  }
  return result
  
}


console.log(nth(arrayToList([10, 20, 30]), 2));

//Solution from book below

/* function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}*/

//This maks a lot more sense. I struggled a bit thinking about how to keep track of how many times the function had run
//and knew I was missing something by haveing to add placeholder variables. 

//Instead of having a counter variable counting down the number and checking if == 0 is more intuitive. 
//Having the result variable is unnecessary if I am just returning list.value.