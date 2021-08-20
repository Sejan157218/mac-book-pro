// Memory
const buttonFor8GBMemory =document.getElementById('memory-8');
const buttonFor16GBMemory =document.getElementById('memory-16');

// Storage
const buttonFor256GB =document.getElementById('storage-256');
const buttonFor512GB =document.getElementById('storage-512');
const buttonFor1TB =document.getElementById('storage-1tb');

// Delivery
const freeDelivery = document.getElementById('free-delivery');
const expensiveDelivery = document.getElementById('expensive-delivery');

// pomo code
const apllyButton = document.getElementById('apply-button');


// price update
const nomalPrice = document.getElementById('normal-price');


// Update price function
function priceUpdate(product,price){
    const proudPrice = document.getElementById(product +'-price');
    proudPrice.innerText = Number(price);
    totalPrice();
}

// total price function
function totalPrice(){
    const subTotalPrice = document.getElementById('sul-total');
    const totalprice = document.getElementById('total');
    const bestPrice = Number(nomalPrice.innerText);
    const memoryPrice = Number(document.getElementById('memory-price').innerText);
    const storagePrice = Number(document.getElementById('storage-price').innerText);
    const deliveryPrice = Number(document.getElementById('delivery-price').innerText);
    const total = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    subTotalPrice.innerText = total;
    totalprice.innerText = total;
}
// promo code function
function pomoCode(){
    const pomoCodeInput = document.getElementById('pomo-code');
    const pomoCodeInputValue = pomoCodeInput.value;
    const matchCode = 'stevekaku';
    if(pomoCodeInputValue == matchCode){
          const previousTotalPrice = document.getElementById('total');
          const previousTotalPriceValue = Number(previousTotalPrice.innerText)
          const discountAmount  = previousTotalPriceValue * 0.2;
          const newTotalPrice = previousTotalPriceValue -discountAmount;
          previousTotalPrice.innerText = newTotalPrice; 
          console.log(previousTotalPrice) ;
    }
    else{
        console.log('ji vai ami nai')
    }
    pomoCodeInput.value = '';
}

// For Memory 

buttonFor8GBMemory.addEventListener('click',function(){
    priceUpdate('memory',0);
})
buttonFor16GBMemory.addEventListener('click',function(){
    priceUpdate('memory',100);
})

// For SSD 

buttonFor256GB.addEventListener('click',function(){
    priceUpdate('storage',0);
})
buttonFor512GB.addEventListener('click',function(){
    priceUpdate('storage',100);
})
buttonFor1TB.addEventListener('click',function(){
    priceUpdate('storage',180);
})

// for Delivery 
freeDelivery.addEventListener('click',function(){
    priceUpdate('delivery',0);
})
expensiveDelivery.addEventListener('click',function(){
    priceUpdate('delivery',20);
})


// For pomo code

apllyButton.addEventListener('click',function(){
    pomoCode();
})