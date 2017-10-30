

function jediName(firstName, lastName) {
    let firstArray = firstName.split('').slice(0,2).join('');
    let lastArray = lastName.split('').slice(0,4).join('');
    console.log(lastArray + firstArray);
}

jediName(Ben, Parman);

function beyond(num) {
    if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
        console.log("And beyond");
    }
    else if (isFinite(num) && num > 0) {
        console.log("To Infinity")
    }
    else if (isFinite(num) && num < 0) {
        console.log("To negative inifinity")
    }
    else {
        console.log("Staying home");
    }
}