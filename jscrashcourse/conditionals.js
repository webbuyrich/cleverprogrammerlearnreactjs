/* CONDTIONALS */

// 18-35 is target demographic

var age = prompt('what is your age?')

if( (age >= 18) && (age <= 35) ){
    ageStatus = 'Part of target demo. You are ' + age + ' years old';
    console.log(ageStatus)
} else {
    ageStatus = 'Not my audience. You are ' + age + ' years old'
    console.log(ageStatus)
}


/* SWITCH STATEMENTS */

// Differentiate between weekday vs weekend

// day 0 Sunday
// day 6 Saturday
// day 4 Thursday --> weekday

switch (2) {
    case 0:
            text = 'weekend';
            break;
    case 5:
            text = 'weekend';
            break;
    case 6:
            text = 'weekend';
            break;
    default: 
            text = 'weekday';
}

console.log(text)