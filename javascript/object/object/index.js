//literal

let emp = {
    eName: "BAZIL",
    eAge: 28,
    ePlace: {
        eCity: "Bengaluru",
        eStreet: "BTM",
    },
};
console.log(emp,typeof emp); // Bengaluru
console.log(emp.eName); // BTM
console.log(emp.ePlace.eStreet);

emp.ePlace.ePin = 560029;
console.log(emp);

// constructor

function stu(name, age){
    this.name = name;
    this.age = age;
}

let s1 = new stu("Rahul", 25);
let s2 = new stu("Rohan", 26);
console.log(s1);
console.log(s2);

//using ne key word


let hero = new Object();
hero.name = "Batman";
hero.age = 30;
console.log(hero); // Batman



// how to create array with using object

let a = new Array(1,2,3,4,5,6,7,8,9,0);
console.log(a);




