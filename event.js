// // Add event listeners for each text
// document.getElementById("Thistle").addEventListener("mouseover", () => {
//     document.body.style.background = "Thistle";
// });

// document.getElementById("LightPink").addEventListener("mouseover", () => {
//     document.body.style.background = "LightPink";
// });

// document.getElementById("LightSteelBlue").addEventListener("mouseover", () => {
//     document.body.style.background = "LightSteelBlue";
// });


// document.getElementById("Gray").addEventListener("mouseover", () => {
//     document.body.style.background = "Gray";
// });

// document.getElementById("MediumAquamarine").addEventListener("mouseover", () => {
//     document.body.style.background = "MediumAquamarine";
// });

let bgColor=document.querySelectorAll(".bgcolor");
[...bgColor].map((ele)=>{
    ele.addEventListener("mouseover",()=>{
        // console.log(ele.innerText);
        ele.style.backgroundColor=ele.innerText;

    });
    ele.addEventListener("mouseleave",()=>{
        ele.style.backgroundColor="transparent";
    })
})
