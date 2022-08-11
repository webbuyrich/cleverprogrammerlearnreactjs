


/*ARRAYS */

let fruits = ['banana', 'apple', 'orange', 'pineapples'];
let fruits1 = new Array('banana', 'apple', 'orange', 'pineapples');

 //access value at 2nd index
console.log(fruits[2]);                            
 

// change 1st index value
fruits[0] = 'pear';                                
console.log(fruits);

// print out every value in array
for ( let i = 0; i < fruits.length; i++ ){          
    console.log(fruits[i]);
}

/**ARRAY COMMON METHODS **/

// returns list of array values on one line
console.log('to string: ', fruits.toString());         

// takes array items and joins them.
console.log(fruits.join(' - '));

// remove last item
console.log(fruits, fruits.pop(), fruits);


// append new item to array
console.log(fruits.push('blackberries'), fruits);

// get array length
console.log(fruits.length);

// add a new item to array(same as push)
fruits[4] = 'new fruit';
console.log(fruits);

// remove first element of a list
fruits.shift();
console.log(fruits)

// add first item of array
fruits.unshift('kiwi');
console.log(fruits);

// combine all arrays
let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);

// slice. start from 1 remove last 4, does not update the array
console.log(allGroceries.slice(1, 4));

// reverse the array
console.log(allGroceries.reverse());

// sort array alphabet
console.log(allGroceries.sort())

// sorted in asc order
let someNumbers = [5,34,12,1,23];
console.log(someNumbers.sort( function(a,b){ return a - b } ));
// sorted in desc order
console.log(someNumbers.sort( function(a,b){ return b - a} ));

// loop and append to empty array
let emptyArray = new Array();
for (let num = 0; num <= 10; num ++){
    emptyArray.push(num);
}
console.log(emptyArray);

