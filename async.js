
function fetchUsers(){
    let res= window.fetch("https://jsonplaceholder.typicode.com/users");
    console.log(res);

    res.then(val =>{
        // console.log(val);
        // console.log(val.json());
        return val.json().then(data=>{
            // console.log(data);
            let store=document.getElementById("store");
            data.map((user)=>{
                // console.log(user);
                store.innerHTML+= `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.company.name}</td>
                </tr>
                `
            })
        })
    }).catch(err=>console.log(err))
}
fetchUsers();






// console.log(10);
// console.log(20);
// setTimeout(()=>{
//     console.log(30);
// },5000)

// const { reject } = require("async");

// console.log(40);
// console.log(50);

// !promise:

// let p1=new Promise((resolve,reject)=>{}); 
// console.log(p1);

// let p2=new Promise((resolve,reject)=>{
//     resolve("success");
// });
// console.log(p2);
// p2.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>console.log("finally printing both"))

// let p3= new Promise((resolve,reject)=>{
//     reject("failure");
// });
// console.log(p3);


