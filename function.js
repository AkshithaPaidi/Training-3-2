//! witjout parameters & arguments
// function demo(){    // func declare
//     console.log("hello");
// }
// demo(); //func call

//! with para & arg

// function add1(a,b){
//     console.log(a+b);
// }
// add1(5,6); 
// add1(7,8);
// add1(3,4);

// function addtoCart(){
//     document.body.style.background="teal";
//     alert("Product added to cart1");
// }

// function isPalindrome(str){
//     let revStr ="";
//     for (let i =str.length-1;i>0;i--){
//         revStr +=str[i];
//     if(str == revStr){
//         console.log("Palindrome");
//     } 
//     else{
//         console.log("Not a palindrome");
//     }
//     }
// }
// isPalindrome("sir");
// isPalindrome("madam");
// isPalindrome("malayalam");

//! ananymous func
// function(){
//     console.log("Ananymous func");
// }

// let x= function(){
//     console.log("function expression")
// }
// console.log(x);
// x();


//! iife
// (
// function(){
//     console.log("iife");
// }
// )();

// arrow func
// let x=()=>{console.log("Hello")};
// x();

// let x=(a,b)=>{console.log(a+b)};
// x(10,5);
// let x=_=>{console.log("hi");
//     console.log("b");
//     console.log("c");
// }
// x();


//return
// let x=(a,b)
// console.log(x(10,30));

//higher order 
// function hof(a){
//     return a;
// }
// let x=hof(10);
// console.log(x);


// function hof(a){
//     return a;
// }
// let x=hof(function(){return" callback func"});
// console.log(x);

// function add(callback){
//     return callback(5,3);
// }
// // let x = add(function(a,b){return a+b});
// // console.log(x);

// let users=['abc','def','ghi','jkl'];

// let x=users.map((user)=>{
//     return user;
// });
// console.log(x);

// let x= users.forEach((user)=>{
// return (user);
// });
// console.log(x);

var a= 10;
let b=30;
function x(){
    var user = "abc";
    let company= "Amazon";
    const salary=123456;
    console.log(user);
    console.log(company);
    console.log(salary);
    console.log(a,b);
}
x();