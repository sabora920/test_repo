

// function jediName(firstName, lastName) {
//     let firstArray = firstName.split('').slice(0,2).join('');
//     let lastArray = lastName.split('').slice(0,4).join('');
//     console.log(lastArray + firstArray);
// }

// jediName('Ben', 'Parman');

// function beyond(num) {
//     if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
//         console.log("And beyond");
//     }
//     else if (isFinite(num) && num > 0) {
//         console.log("To Infinity")
//     }
//     else if (isFinite(num) && num < 0) {
//         console.log("To negative inifinity")
//     }
//     else {
//         console.log("Staying home");
//     }
// }


const message = 'craft block argon meter bells brown croon droop';

function decode(message){
    let arr = message.split(' ');
    let result = '';
    let strOfWord = [];
    for(let i=0; i < arr.length; i++){
        if(arr[i][0] === 'a'){
            result += arr[i][1];
        } else if (arr[i][0]=== 'b'){
            result += arr[i][2];
        } else if (arr[i][0]=== 'c'){
            result += arr[i][3];
        } else if (arr[i][0]=== 'd'){
            result += arr[i][4];
        }
    }
    console.log(result);
}
decode(message);

function daysInMonth(month){
    let days;
    switch(month){
        case 'January':
            days = 31;
            break;
        case 'February':
            days =28;
            break;
        case 'March':
            days = 31;
            break;
        case 'April':
            days = 30;
            break;
        case 'May':
            days = 31;
            break;
        case 'June':
            days = 30;
            break;
        case 'July':
            days = 31;
            break;
        case 'August':
            days = 31;
            break;
        case 'September':
            days = 30;
            break;
        case 'October':
            days = 31;
            break;
        case 'November':
            days = 30;
            break;
        case 'December':
            days = 31;
            break;
    }
    console.log(days);
}
daysInMonth('September');

/*
rock = 1
paper = 2
scissors = 3
*/

function RockPaperScissors(userChoice){

    let computer = 1 + Math.floor((Math.random()*3));
    if(userChoice === computer){
        console.log(`It's a tie!`);
    } 
    if(userChoice === 1){
        if(computer === 3){
            console.log(`You win!`);
        } else {
            console.log(`You lose :(`);
        }
    }
    if(userChoice === 2){
        if(computer === 1){
            console.log(`You win!`);
        } else {
            console.log(`You lose :(`);
        }
    }
    if(userChoice === 3){
        if(computer === 2){
            console.log(`You win!`);
        } else {
            console.log(`You lose :(`);
        }
    }
}

RockPaperScissors(2);