// // const coffeMod = document.querySelector("#coffModel");
// // const search = document.querySelector("#searchBox");
// // addEventListener('input', function(){
// // newDiv = document.createElement('div')
// // newDiv.classList.add('container')
// // searchBox = document.appendChild('newDiv');
//   const container = document.getElementById("container");
// SELECT با querySelector
// =====================
const app = document.querySelector("#apps");
const searchInput = document.querySelector("#searchInput");
const nameInput = document.querySelector("#nameInput");
const priceInput = document.querySelector("#priceInput");
const imgInput = document.querySelector("#imgInput");
const addBtn = document.querySelector("#addCof");

// =====================
// داده‌ها (Array)
// =====================
let coffees = [
    { name: "Espresso", price: "3$", img: "https://www.sharmispassions.com/wp-content/uploads/2012/07/espresso-coffee-recipe022.jpg" },
    { name: "Latte", price: "4$", img: "https://media.istockphoto.com/id/1152767411/photo/cup-of-coffee-latte-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=24HBAvkahjo8LKV-6DRUklQzPJUqxjmVlBFtV5BG4tU=" },
    { name: "Cappuccino", price: "5$", img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-07-Cappuccino%2FCappuccino" },
    { name: "Americano", price: "3.5$", img: "https://www.shutterstock.com/image-photo/hot-americano-coffee-rich-aroma-600nw-2706827099.jpg" },
    { name: "Latte", price: "4$", img: "https://media.istockphoto.com/id/1152767411/photo/cup-of-coffee-latte-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=24HBAvkahjo8LKV-6DRUklQzPJUqxjmVlBFtV5BG4tU=" },
    { name: "Cappuccino", price: "5$", img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-07-Cappuccino%2FCappuccino" },
    { name: "Americano", price: "3.5$", img: "https://www.shutterstock.com/image-photo/hot-americano-coffee-rich-aroma-600nw-2706827099.jpg" },
    { name: "Latte", price: "4$", img: "https://media.istockphoto.com/id/1152767411/photo/cup-of-coffee-latte-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=24HBAvkahjo8LKV-6DRUklQzPJUqxjmVlBFtV5BG4tU=" },
    { name: "Cappuccino", price: "5$", img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-07-Cappuccino%2FCappuccino" },
    { name: "Americano", price: "3.5$", img: "https://www.shutterstock.com/image-photo/hot-americano-coffee-rich-aroma-600nw-2706827099.jpg" },
    { name: "Latte", price: "4$", img: "https://media.istockphoto.com/id/1152767411/photo/cup-of-coffee-latte-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=24HBAvkahjo8LKV-6DRUklQzPJUqxjmVlBFtV5BG4tU=" },
    { name: "Cappuccino", price: "5$", img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-07-Cappuccino%2FCappuccino" },
]



// const product = [
//     { name: "lungo", price: "$1", img: "https://img.freepik.com/free-photo/latte-coffee-cup_74190-1195.jpg" },
//     { name: "Doppio", price: "$2", img: "https://via.placeholder.com/50" },
//     { name: "Latte", price: "$3", img: "https://via.placeholder.com/50" },
//     { name: "Mocha", price: "$4", img: "https://via.placeholder.com/50" }
//   ];
// ];

// =====================
// ساخت container با JS
// =====================
const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";

app.appendChild(container);

// =====================
// نمایش قهوه‌ها (for loop)
// =====================
function showCoffees(list) {
    container.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        const coffee = list[i];

        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h3");
        title.textContent = coffee.name;

        const price = document.createElement("p");
        price.textContent = coffee.price;

        const img = document.createElement("img");
        img.src = coffee.img;

        const btn = document.createElement("button");
        btn.textContent = "BUY";

        // event 1
        btn.addEventListener("click", function () {
            // card.remove();
            //  alert("سفارش شما انجام شد ✅");
            Swal.fire({
                icon: 'success',
                title: 'Order Placed!',
                text: 'Your order has been placed successfully.',
                confirmButtonText: 'OK',
                background: 'burlywood',
                iconColor: '#ffffff',
                showClass: {
                    popup: 'animate_animated animate_fadeInDown'
                },
                hideClass: {
                    popup: 'animate_animated animate_fadeOutUp'
                }// ai + site animition swal fire
            });
        });

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(btn);

        container.appendChild(card);

        // for (let i = 0; i < products.length; i++) {
        //   const product = products[i];

        //   const div = document.createElement("div");
        //   div.classList.add("box");

        //   div.innerHTML = `
        //     <img src="${product.img}" />
        //     <div>${product.name}</div>
        //     <div>${product.price}</div>
        //   `;

        //   container.appendChild(div);
    }
}

// =====================
// جستجو (input.value)
// =====================
searchInput.addEventListener("input", function () { // event 2
    const value = searchInput.value.toLowerCase();

    const filtered = [];

    for (let i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().includes(value)) {
            filtered.push(coffees[i]);
        }
    }

    showCoffees(filtered);
});

// =====================
// اضافه کردن قهوه جدید
// =====================
addBtn.addEventListener("click", function () { // event 3

    const name = nameInput.value;
    const price = priceInput.value;
    const img = imgInput.value;

    if (name && price && img) {
        const newCoffee = {
            name: name,
            price: price,
            img: img
        };

        coffees.push(newCoffee);

        showCoffees(coffees);

        // پاک کردن input ها
        nameInput.value = "";
        priceInput.value = "";
        imgInput.value = "";
    }
    if (!name.value || !price.value || !img.value) {
        alert("You Have To Write Something!!!");
    }
});

// =====================
// نمایش اولیه
// =====================
showCoffees(coffees);