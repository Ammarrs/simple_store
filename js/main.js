let btn = document.querySelector(".btn");
let div = document.querySelector(".display");
let h1 = document.querySelector("h1");

async function getProducts() {
  let results = await fetch("https://dummyjson.com/products");
  let data = await results.json();
  return data;
}

btn.addEventListener("click", async () => {
  h1.innerHTML = "Loading Products ....";

  let results = await getProducts();
  results = results.products;
  console.log(results);

  h1.innerHTML = "";

  let cards = results
    .map((result) => {
      return `<div class="card col-lg-3" style="width: 18rem">
          <img src=${result.images[0]} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${result.title}</h5>
            <h6 class="text-secondary">${result.category}</h6>
            <p class="card-text">
              ${result.description}
            </p>
            <p class="text-success fw-bold">\$${result.price}</p>
            <a href="#" class="btn btn-primary col-12">View Product</a>
          </div>
        </div>`;
    })
    .join("");
  div.innerHTML = cards;
});
