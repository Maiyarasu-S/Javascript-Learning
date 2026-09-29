// Type Conversion
// Explicitly Convert one DATA TYPE to Another

// 1. String Conversion
// String(value)

let isf = 24;
let ifg = String(isf)
console.log(typeof ifg);

// 2. Numeric Conversion
// Number(value)

let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number

// 3. NaN
let age = Number("an arbitrary string instead of a number");
alert(age); // NaN, conversion failed

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

// 4. Boolean Conversion
