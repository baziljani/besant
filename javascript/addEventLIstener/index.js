let a = document.getElementById("btn1");
a.addEventListener("click", () => {
    let body = document.body;
    body.style.backgroundColor = "red";
});

let b = document.getElementById("ip1");
b.addEventListener("blur", () => {
    let input = document.getElementById("ip1");
    input.value = input.value.toUpperCase();
});