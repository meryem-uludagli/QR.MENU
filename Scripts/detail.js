const params = new URLSearchParams(window.location.search);
const id = params.get("id");


document.addEventListener("DOMContentLoaded", async() => {
    try {
        const res = await fetch("../db.json");
        const data = await res.json();
        const product = data.menu.find((item) => item.id == id);

        if (!product) {
            renderNotFound();
        } else {
            renderPage(product);
        }
    } catch (error) {
        renderNotFound();
        alert("üzgünüz bir sorun oluştu");
    }
});

const outlet = document.getElementById("outlet");

function renderPage(product) {
    outlet.innerHTML = `
     <div class="d-flex justify-content-between fs-6">
        <a href="/">
          <img width="35px" src="/Image/home.png" />
        </a>
        <p>anasayfa / ${
          product.category
        } / ${product.title.toLowerCase()}</p>
      </div>

      <h1 class="text-center my-4">${product.title}</h1>

      <img
        src="${product.img}"
        style="max-height: 400px"
        class="rounded object-fit-cover shadow"
      />

      <h4 class="mt-4">
        <span>Product Category: </span>
        <span class="text-success">${product.category}</span>
      </h4>

      <h4 class="mt-4">
        <span>Product Price: </span>
        <span class="text-success">${(product.price * 30).toFixed(
          2
        )} ₺</span>
      </h4>

      <p class="lead">
       ${product.desc}
      </p>
    `;
}

function renderNotFound() {
    outlet.innerHTML = `
  <div style="height:90vh" class="d-flex justify-content-center align-items-center">
  <div class="d-flex flex-column align-items-center gap-3">
    <h1 class="text-center">Aradığınız ürün mevcut değil</h1>

    <a href="/">Anasayfaya Dönün</a>
 </div>
  </div>  
    `;
}