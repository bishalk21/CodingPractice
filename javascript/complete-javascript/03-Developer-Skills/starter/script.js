// Remember, we're gonna use strict mode in all scripts now! 
// strict mode is a way to make sure we write better code. The reason is that it makes it easier for us to catch errors.
"use strict";
// ======= Checking for prettier code setup =======
/*
const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1991));
*/

// ====== Problem Solving ======
/*
// Problem 1
// We work for a company building a smart home thermometer. Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude, Keep in mind that sometimes there might be a sensor error."

/// temperature array
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temperature amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {

    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {

        const curTemp = temps[i];
        if (typeof curTemp !== "number") continue;
        console.log(typeof curTemp);

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    return max - min;
    // console.log(max, min);
}

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2

// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? No! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {

    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {

        const curTemp = temps[i];
        if (typeof curTemp !== "number") continue;
        console.log(typeof curTemp);

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
}

const amplitudeNew = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

// ====== Debugging ======
/*
// ====== Debugging with the Console and Breakpoints ======

// In thermometer problem, we have a bug. The problem is that the function is not returning the correct value. The function is returning undefined. We need to debug the code to find the bug.

const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: "celsius",
        // Problem: Fix this bug
        // value: (prompt("Degrees celsius:")),

        // Solution: Convert string to number
        // C) FIX - prompt function returns a string, so we need to convert it to a number
        value: Number(prompt("Degrees celsius:")),
    }

    // B) FIND
    console.table(measurement);
    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
}

// A) IDENTIFY
console.log(measureKelvin());

*/

// ====== Coding Challenge #1 ======
/*
// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures. Example: [17, 21, 23] will print "... 17C in 1 days ... 21C in 2 days ... 23C in 3 days ..."

// Your tasks:
// 1) Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
// 2) Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// Test data:
// Data 1: [17, 21, 23]
// Data 2: [12, 5, -5, 0, 4]

// GOOD LUCK 😀

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with degree C
// - String needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log("... " + data1[0] + "C in 1 days ... " + data1[1] + "C in 2 days ... " + data1[2] + "C in 3 days ...");

const printForecast = function (arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}*C in ${i + 1} days ..., `;
    }
    console.log("..." + str);
}

printForecast(data1);
printForecast(data2);
*/