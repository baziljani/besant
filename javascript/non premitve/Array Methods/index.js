let a = [1, 2, 3, 4, 5, 6, 7];


//Adding data in a last index

let b = a.push(8, 9);
console.log(a);


//deleting fron the data

let c = a.pop();
console.log(a);


///adding data from first

let d = a.unshift(0);
console.log(a);


//remove the data from starting index

let e = a.shift();
console.log(a);

//extract a value from an array


let f = a.map((v, i)=> {
  console.log(v);
});



//removing unwanted things


let g = a.filter((v, i) => v > 4);
console.log(g);

//accumulated a value (complete array comes in single vlue)

let h = a.reduce((p, c) => {
    return (p + c);
});
console.log(h);



//it will return the first value
let i = a.find((v, i) => v > 4);
console.log(i);

let j = a.every((v, i) => v > 5);
console.log(j);

//for fetch only

for (const arr in a) {
    console.log(arr);
    
}
//for fetch only with index
for (const arr of a) {
    console.log(arr);
}

//for fetch only with index and value
for (const [index, arr] of a.entries()) { 
    console.log(index, arr);
}

//for both index and valu

let k = a.forEach((v, i) => {
    console.log(`$(v)==$(i)`);
});

// for each never returns an array

let kk = a.forEach((v, i) => v * 2);
console.log(kk);


//reversing an array

let l = a.reverse();
console.log();

//convert array into string

let m = a.join();
console.log(m);

// palindrome check

let x = prompt("enter in a string");
let y = x.split("").reverse().join("");
if (x === y) { 
    console.log("palindrome");
} else {
    console.log("not palindrome");
    }
console.log(y);

