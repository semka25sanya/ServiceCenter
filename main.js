let buttonMoreInformation = document.querySelector('.button-brend__more')
let brensList = document.querySelector('.brends-list')

buttonMoreInformation.addEventListener('click', function(){
  if (buttonMoreInformation.textContent == 'Показать все'){
    buttonMoreInformation.textContent = 'Скрыть'  
  } else {
    buttonMoreInformation.textContent = 'Показать все'  
  }
  brensList.classList.toggle('brends-list--full')
  buttonMoreInformation.classList.toggle('button-brend__more-rotate')
})