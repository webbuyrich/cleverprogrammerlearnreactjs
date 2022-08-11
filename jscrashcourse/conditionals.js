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


