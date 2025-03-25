let hour = 10;
if (hour < 12) {
    console.log('Good morning');
} else {
    console.log('Good afternoon');
}


//ternary

let age = 19;
let driving = age >= 18 ? console.log('yes') : console.log('no');

//For each

let array = [1, 2, 'foo', true];
array.forEach((element, index, array) => {
    console.log(element, 'was at index:', index);
});
///ek hi objeck ki value ko print krega, fir iterate krega


//template literaks

const name = 'Alice';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!

//can access arrays, objects of classes thru it, their index etc...

function clk