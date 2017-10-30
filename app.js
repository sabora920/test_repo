// let myTeam = 'Ryan and Ben';
// // console.log(myTeam);

// let courseDescr = 'thinks this is fun!';
// console.log(`${myTeam} ${courseDescr}`);

function whoAmI(name, age) {
    let yob = 2017 - age;

    try {

        if(age < 0) throw 'Must be positive number!';
        if(isNaN(age)) throw 'not a Number!';
    
    } catch(error) {

        console.log(`${error}`);

    }

    if(age === undefined || name === undefined){
        console.log(`You must Input in field`);
    } else if(age < 0){
        console.log(`You can not enter a negative number`);
    } else if (isNaN(age)){
        console.log(`Not a Number`);
    } else if(typeof name !== "string"){
        console.log(`This is not a Name`);
    }else {
    console.log(`Hi my name is ${name} and I'm ${age} years old`);
    console.log(`I was born in ${yob}`);
    }
}
whoAmI('Ben', 100);

// function yearOfBirth(currentYear, age) {
//     let birthYear = currentYear-age;
//     return birthYear;
// }
// yearOfBirth(2017, 100);


