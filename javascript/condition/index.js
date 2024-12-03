//only when condition is true

let age = 18;
if (age >= 18) {
    console.log("You are an adult");
}


//condition when enter true or false

let BabyAge = 4;
if (BabyAge >= 5) {
    console.log("You are a baby");
} else {
    console.log("You are not a baby");
}

//multiple condition

let marks = prompt(" Enter your marks");
if (marks >= 85) {
    console.log("Grade A");
} else if (marks >= 60 && marks < 85) {
    console.log("Grade B");
} else if (marks >= 40 && marks < 60) {
    
    console.log("Grade C");
} 
else {
    console.log("Grade Faill da nayeee");
    }



//switch case
    

let time = 6;
switch (time) {
    case 6:
        console.log("Good morning");
        break;
    case 12:
        console.log("Good afternoon");
        break;
    case 18:
        console.log("Good evening");
        break;
    default:
        console.log("Enter Propper Time");
        break;
}
