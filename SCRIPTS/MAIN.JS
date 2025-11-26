// 🔍 Botón de búsqueda (más adelante agregaremos la función)
document.getElementById("search-btn").addEventListener("click", () => {
    alert("Aquí se abrirá la barra de búsqueda 🧭");
});

// 🛒 Botón del carrito (también lo conectaremos después)
document.getElementById("cart-btn").addEventListener("click", () => {
    alert("Aquí irá el carrito de compras 🛒");
});

// CÓDIGO PARA LAS MINIATURAS DE PRODUCTO
const mainImg = document.getElementById("main-product-img");
const thumbs = document.querySelectorAll(".thumb-img");

thumbs.forEach(img => {
    img.addEventListener("click", () => {
        mainImg.src = img.src;
    });
});