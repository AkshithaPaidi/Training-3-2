//! find the maximum number among the given values.
//! let a =120;
//! let b=30;
//!let c=10;

// code
// if-else method
let a = prompt("Enter the first value (a):");
let b = prompt("Enter the second value (b):");
let c = prompt("Enter the third value (c):");

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log("Invalid value entered. Please enter numeric values only.");
} else {
  if (a === b && b === c) {
    console.log("All values are equal.");
  } else if (a > b && a > c) {
    console.log(`The largest value is a: ${a}`);
  } else if (b > a && b > c) {
    console.log(`The largest value is b: ${b}`);
  } else if (c > a && c > b) {
    console.log(`The largest value is c: ${c}`);
  } else {
    console.log("There is no single largest value.");
  }
}



// switch-case method

// let a = prompt("Enter the first value (a):");
// let b = prompt("Enter the second value (b):");
// let c = prompt("Enter the third value (c):");


// a = parseFloat(a);
// b = parseFloat(b);
// c = parseFloat(c);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log("Invalid value entered. Please enter numeric values only.");
} else {
  switch (true) {
    case a === b && b === c:
      console.log("All values are equal.");
      break;
    case a > b && a > c:
      console.log(`The largest value is a: ${a}`);
      break;
    case b > a && b > c:
      console.log(`The largest value is b: ${b}`);
      break;
    case c > a && c > b:
      console.log(`The largest value is c: ${c}`);
      break;
    default:
      console.log("There is no single largest value.");
  }
}
