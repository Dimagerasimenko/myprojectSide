const btnBuy = document.querySelectorAll('.btn-item-buy');
const popUpInfoItem = document.querySelector('.catalog-item-info');

for(let i = 0; i < btnBuy.length; i++){
btnBuy[i].addEventListener('click', (evt) => {
  evt.preventDefault();
    popUpInfoItem.style.display = 'block';

});
}


