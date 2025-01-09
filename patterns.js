// //   square pattern- for loop

// let line = ""; 
// function square(n) { 
// 	for (let i = 1; i <= n; i++) { 
// 		line += "* "; 
// 	} 
	
// 	for (let j = 1; j <= n; j++) { 
// 		console.log(line); 
// 	} 
// } 

// let size = 5; 
 
// square(size);


// // Square pattern- nested for loop

// let patternSize = 5; 

// for (let i = 1; i <= patternSize; i++) {
//     let line = ""; 

//     for (let j = 1; j <= patternSize; j++) {
//         line += "*  "; 
//     }

//     console.log(line); 
// }



// triangle pattern - for loop

// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//         str += "* ";
//     }
//     console.log(str);
// }



//  x-pattern - nested for loop

let n = 7;
for (let i = 0; i < n; i++) {
    let row = ""; 

    for (let j = 0; j < n; j++) {
        
        if (i === j || i + j === n - 1) {
            row += "*"; 
        } else {
            row += " "; 
        }
    }

    console.log(row); 
}

