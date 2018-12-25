const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');

btn1.addEventListener('click', (evt) => {
  evt.preventDefault();

  if(btn1.checked){
    slide1.style.display = 'block';
    slide2.style.display = 'none';

  }
});

btn2.addEventListener('click', (evt) => {
  evt.preventDefault();
  if(btn2.checked){
    slide2.style.display = 'block';
    slide1.style.display = 'none';
  }
});


