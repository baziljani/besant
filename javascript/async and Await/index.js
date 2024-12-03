async function x() {
    try {
        let data = await fetch("https://fakestoreapi.in/api/products");
        let finishdata = await data.json();
        console.log(finishdata); // Check the data structure here
        if (Array.isArray(finishdata) && finishdata.length > 0) {
            finishdata.map((item, index) => {
                let body = document.body;
                let section = document.createElement("section");
                section.innerHTML += `<h1>${item.title}</h1>
                <img src="${item.image}" alt="${item.title}" />`;
                body.appendChild(section);
            });
        } else {
            console.log("No products found");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
x();