const addBox = document.querySelector('.add-box');
const btnOpenAddBox = document.querySelector('.btn-open_add-box');
btnOpenAddBox.addEventListener('click', (evt) => {
  if (!addBox.classList.contains('modal-show')) {
    addBox.classList.add('modal-show');
  } else {
    addBox.classList.remove('modal-show');
  }
})


const btnAddBox = document.querySelector('.btn-add_box');
const populaItem = document.querySelector('.popular-item');


btnAddBox.addEventListener('click', (evt) => {
  evt.preventDefault();
  const addVendor = document.querySelector('.add-vendor').value;
  const addModul = document.querySelector('.add-modul').value;
  const addPrice = document.querySelector('.add-price').value;
  const addImg = document.querySelector('.add-img').src;


  const divItem = document.createElement('div');
  divItem.classList.add('catolog-item');

  const divBtn = document.createElement('div');
  divBtn.classList.add('btn-box');
  const btnBuyAdd = document.createElement('button');
  btnBuyAdd.classList.add('btn-item-buy');

  const img = document.createElement('img');
  img.src = addImg;
  img.classList.add('catolog-item-img');
  img.style.width = '127';
  img.style.height = '117';
  const itemVendor = document.createElement('p');
  itemVendor.classList.add('catalog-item-vendor');
  const itemModul = document.createElement('p');
  itemModul.classList.add('catalog-item-modul');
  const itemDiscount = document.createElement('p');
  itemDiscount.classList.add('catalog-item-discount');

  if (addVendor != '' && addModul != '' && addPrice != '') {
    itemVendor.textContent = addVendor;
    itemModul.textContent = addModul;
    itemDiscount.textContent = addPrice;

    btnBuyAdd.textContent = 'купить';
    divBtn.appendChild(btnBuyAdd);

    divItem.appendChild(divBtn);
    divItem.appendChild(img);
    divItem.appendChild(itemVendor);
    divItem.appendChild(itemModul);
    divItem.appendChild(itemDiscount);
    populaItem.appendChild(divItem);


  } else {alert('Введите значения товара')}



})






