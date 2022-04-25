const addCart = document.querySelectorAll(".add-cart")
const cardEmpty = document.querySelector(".card-empty");
const btnRemoveItem = document.querySelector(".item-trash_btn");
const cartCountBtn = document.querySelector(".cart-count");

// funcionalidad de carrito

addCart.forEach(addCartBtn=>{
    addCartBtn.addEventListener("click", addCartChoose);
})

function addCartChoose(event){
    const btnChoose = event.target;
    const cardChoosed = btnChoose.closest(".products-card");
    
    const titleCard = cardChoosed.querySelector(".cont-title").textContent;
    const priceCard = cardChoosed.querySelector(".cont-price_card").textContent;
    const quantityCard = cardChoosed.querySelector(".cont-quantity").textContent;
    const imgCard = cardChoosed.querySelector(".img-product").src;

    addCardToCart(titleCard, priceCard, quantityCard, imgCard);
}

// function: add products to cart
function addCardToCart(titleCard, priceCard, quantityCard, imgCard){
    const itemAdded = document.createElement("div");

    const itemCardContent = `
    <div class="card-item_add">
        <img class="item-img_cont" src=${imgCard} alt="">
        <div class="content-detail_item">
            <h4 class="detail-content_title">${titleCard}</h4>
            <span class="detail-price">${priceCard}</span>
            <div class="detail-content_btns">
                <button><i class="fa-solid fa-minus"></i></button>
                <span class="detail-quantity_numb">${quantityCard}</span>
                <button><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>
        <button class="item-trash_btn">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>`;
    itemAdded.innerHTML = itemCardContent;
    cardEmpty.append(itemAdded);

    itemAdded.querySelector(".item-trash_btn").addEventListener("click", removeItemCard)

    updateTotalPrice()
}

function updateTotalPrice(){
    let totalPrice = 0;
    let totalItemsQuantity = 0;

    const detailPriceTotal = document.querySelector(".detail-price_total");
    const detailQuantityTotal = document.querySelector(".detail-items_num");
    const cardItemsCart = document.querySelectorAll(".card-item_add");

    cardItemsCart.forEach(cardItem =>{
        const detailPriceItem = cardItem.querySelector(".detail-price");
        const detailPriceItemUnit = Number(detailPriceItem.textContent.replace('$', ''));
        const detailQuantity = cardItem.querySelector(".detail-quantity_numb");
        const detailQuantityNumber = Number(detailQuantity.textContent);
        
        totalPrice = totalPrice + detailPriceItemUnit * detailQuantityNumber;
        totalItemsQuantity += detailQuantityNumber;
    });
    detailPriceTotal.innerHTML = `$${totalPrice.toFixed(2)}`;
    detailQuantityTotal.innerHTML = `${totalItemsQuantity}`;
    cartCountBtn.innerHTML = `${totalItemsQuantity}`;
}

function removeItemCard(event){
    const btnRemove = event.target;
    btnRemove.closest(".card-item_add").remove();
    updateTotalPrice()
}