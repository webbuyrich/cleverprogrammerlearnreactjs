console.log('hello');


//alert('Hello this is Richard');

// How to run a comment inline
// alert('Hello this is Richard');


// Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

// add html code to JS page. This will add text to the corresponding element with an ID of someText
document.getElementById('someText').innerHTML = 'Hey there';

// add html code to JS page. This will add text to the corresponding element with an ID of thisText
document.getElementById('thisText').innerHTML = 'Sample Heading 1';

// allowing age to be stored
var age = prompt('What is your age?');
// add age variable to other element
document.getElementById('ageText').innerHTML = 'My age is ' + age + ' and you better believe it!';