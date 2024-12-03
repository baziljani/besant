let grandparent = document.getElementById("grandParent");
    grandparent.addEventListener("click", (event) => {
        event.stopPropagation();
        grandparent.style.backgroundColor = "gold";
    });

    let Parent = document.getElementById("parent");
    Parent.addEventListener("click", (event) => {
        event.stopPropagation();
        Parent.style.backgroundColor = "green";
    });

    let Child = document.getElementById("child");
    Child.addEventListener("click", (event) => {
        event.stopPropagation();
        Child.style.backgroundColor = "red";
    });