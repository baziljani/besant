let a = "Hello World";
console.log(a.length);

let b = a.charAt(7);
console.log(b);

let c = a.charCodeAt(0);
console.log(c);

let d = a.toUpperCase();
console.log(d);

let e = a.toLowerCase();
console.log(e);

let f = a.startsWith("Hello")
console.log(f);

let g = a.endsWith("World");
console.log(g);

let h = a.includes("o");
console.log(h);

let i = a.indexOf("o");
console.log(i);

let j = a.slice(0, 4);
console.log(j);

let k = a.repeat(20);
console.log(k);

let l = a.replace("Hiiii", "Jaan");
console.log(l);

let m = a.split();
let n = a.split("");
let o = a.split(" ");
console.log(m);
console.log(n);
console.log(o);


let p = prompt("Enter a name");
let q = p.charAt(0).toUpperCase();
let r = p.slice(1);
console.log(q.concat(r));
