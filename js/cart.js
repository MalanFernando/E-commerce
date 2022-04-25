const addCart = document.querySelectorAll(".add-cart")
const cardEmpty = document.querySelector(".card-empty");

// funcionalidad de carrito

addCart.forEach(addCartBtn=>{
    addCartBtn.addEventListener("click", addCartChoose);
})

function addCartChoose(event){
    const btnChoose = event.target;
    const cardChoosed = btnChoose.closest(".products-card");
    
    const titleCard = cardChoosed.querySelector(".cont-title").textContent;
    const priceCard = cardChoosed.querySelector(".cont-price_card").textContent;
    const btnQuantity = cardChoosed.querySelector(".cont-btn").textContent;
    const imgCard = cardChoosed.querySelector(".img-product").src;

    addCardToCart(titleCard, priceCard, btnQuantity, imgCard);
}

// function: add products to cart
function addCardToCart(titleCard, priceCard, btnQuantity, imgCard){
    const itemAdded = document.createElement("div");

    const itemCardContent = `
    <div class="card-item_add">
        <img class="item-img_cont" src=${imgCard} alt="">
        <div class="content-detail_item">
            <h4 class="detail-content_title">${titleCard}</h4>
            <span class="detail-price">${priceCard}</span>
            <div class="detail-content_btns">
                <button><i class="fa-solid fa-minus"></i></button>
                <span>${btnQuantity}</span>
                <button><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>
        <button class="item-trash_btn">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>`;
    itemAdded.innerHTML = itemCardContent;
    cardEmpty.append(itemAdded);
}