if(true){
    console.log("if block is executing");
}
if(false){
    console.log("if block is executing");
}

let age = 18;

if(age >= 18){
    console.log("eligible for voting");
}else{
    console.log("Not eligible for voting");
}

let isAuthprized = false;

if(isAuthprized == true){
    console.log("Welcome to Payment Page");
}else{
    console.log("Please login first!!!");
}

let day = prompt("Enter a day number");
if(day == 1){
    console.log("Sun");
}else if(day == 2){
console.log("Mon");
}
else if(day == 3){
    console.log("Tue");
}
else if(day==4){
    console.log("wed");
}
else if(day == 5){
    console.log("Thu");
}
else if(day == 6){
    console.log("Fri");
}
else if(day == 7){
    console.log("Sat");
}
else{
    console.log("Invalid day");
}


let days = Number(prompt("Enter a day number"));
console.log(typeof(days));
switch (days) {
    case 1:
        console.log("Sun");
        break;
    case 2:
        console.log("Mon");
        break;
        case 3:
        console.log("Tue");
        break;
        case 4:
        console.log("Wed");
        break;
        case 5:
        console.log("Thu");
        break;
        case 6:
        console.log("Fri");
        break;
        case 7:
        console.log("Sat");
        break;
    default:console.log("Invalid day");
        break;
}
