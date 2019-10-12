const calc = () => {
    const cardOrder = document.querySelector('#card_order'),
    priceTotal = document.querySelector('.price-message>input'),
    showPrice = document.querySelector('#price-total');
    if(priceTotal == true){
        priceTotal.name = 'promo';
    }
    const prices = {
        mozaika: [
            {period:1, price:1999},
            {period:6, price:9900}, 
            {period:9, price:13900},
            {period:12, price:19900}],
        schelkovo: [
            {period:1, price:2999},
            {period:6, price:14990},
            {period:9, price:21990},
            {period:12, price:24990}]
    };

    cardOrder.addEventListener('change', (event) => {
        const target = event.target;
        if (target.matches('.time>input')){
            selectPeriod(target);
        }
        if (target.matches('.club>input')){
            selectPlace(target);
        }
    });

    let selectedPlace = "mozaika";
    const selectPlace = (event) => {
        selectedPlace =  event.value;
        invalidatePrice();
    };

    let selectedPeriod = 1;
    const selectPeriod = (event) => {
       selectedPeriod =  event.value;
      invalidatePrice();
    };

    priceTotal.addEventListener('change', () => {
        invalidatePrice();
    });

    const invalidatePrice = ()=> {
        let discount;
      
        const placePrices = prices[selectedPlace];  
        const priceEl =  placePrices.find( price => price.period == selectedPeriod);
      
        if ( priceTotal.value != "ТЕЛО2019" ){
          discount = 1;
        } else {
          discount = 0.7;
        }   

        showPrice.textContent = Math.ceil(priceEl.price * discount);
    };
};
export default calc;