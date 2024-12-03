let a = document.getElementById("h11");
a.style.background = "green";
console.log(a);

let b = document.getElementsByClassName("sp1");
for (let i = 0; i < b.length; i++) {
    b[i].style.background = "blue";
}

// let c = document.getElementsByTagName("b");
// for (let i = 0; i < c.length; i++) {
//     c[i].style.color = "red";
// }

let c = document.getElementsByTagName("b");
for (let i = 0; i < c.length; i++) {
    c[i].style.background = "red";
}

let d = document.querySelector(".sp1");
console.log(d);
let e = document.querySelectorAll(".sp1");
console.log(e);

