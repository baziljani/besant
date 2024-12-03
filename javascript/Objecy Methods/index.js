// how to convert object in to array

let emp = {
    eName: "SanajaiRamasamy",
    eAge: 28,

};
// Object.freeze(emp);

Object.seal(emp);


emp.eName = "Ramasamy";// change the value of eName property
emp.ePin = 560029;
console.log(emp);



console.log(Object.keys(emp));
console.log(Object.values(emp));
console.log(Object.entries(emp));

