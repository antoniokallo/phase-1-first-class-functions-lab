//anonymous function takes in an array 
const returnFirstTwoDrivers = (array) => {
    // return first two drivers as array 
    return array.slice(0, 2)
}
// returnFirstTwoDrivers() - function tkes in the array 

// anonymous function takes in array
const returnLastTwoDrivers = (array) =>{
    // return last two drivers as an array
    return array.slice(-2) // alternative : array.slice(array.length - 3)
}

//selecting drivers - this is an array containing two elements: the two functions that we previous defined.
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
//having parenthesis returnFirstTwoDrivers() runs the function. we just want to store it

/*
createFareMultiplier() - This is a higher-order function that takes in an argument an integer
and returns a funciton that will multiply the fare for a ride accordingly. 
it will return a function that takes in a fare as an argument and quadruples the fare
*/

// function takes in integer
// returns an anonmyous function 
//function takes parameter fare
//mulipty fare by multiplier

/*other option: const createFareMultiplier = (multiplier) => {
return function (fare) {
    return fare * multiplier
}
}
*/
const createFareMultiplier = function(num) {
    return function(fare) {
        return fare * num
    }
}

const fareDoubler = createFareMultiplier(2)
//faredoubler is equal to the variable createFareMultiplier with number replaced with 2

const fareTripler = createFareMultiplier(3)

//fxn will either == first two dirvers || last two drivers 
const selectDifferentDrivers = function(drivers, selectingDrivers) {
    return selectingDrivers(drivers)
}
//selectDifferentDrivers takes in an array and a function 
// pass an array into function: function(array)
