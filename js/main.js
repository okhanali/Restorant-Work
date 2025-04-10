const searchForm = document.querySelector(".search-form");
const basketCart = document.querySelector(".cart-container");
const navbar = document.querySelector(".navbar")



//! BTN
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
    document.addEventListener("click", (e) => {
        if(
            !e.composedPath().includes(searchBtn) &&
            !e.composedPath().includes(searchForm)
        ){
            searchForm.classList.remove("active");
        }
    })
});


cartBtn.addEventListener("click", () => {
    basketCart.classList.toggle("active");
    document.addEventListener("click", (e) => {
        if(
            !e.composedPath().includes(cartBtn) &&
            !e.composedPath().includes(basketCart)
        ){
            basketCart.classList.remove("active");
        }
    })
});

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    document.addEventListener("click", (e) => {
        if(
            !e.composedPath().includes(menuBtn) &&
            !e.composedPath().includes(navbar)
        ){
            navbar.classList.remove("active");
        }
    })
});