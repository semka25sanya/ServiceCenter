const buttonMoreInformation = document.querySelector('.button-brend__more')
const brendsList = document.querySelector('.brends-list')

buttonMoreInformation.addEventListener('click', function(){
  brendsList.classList.toggle('brends-list--full')
  buttonMoreInformation.classList.toggle('button-brend__more-rotate')
    if (brendsList.classList.contains('brends-list--full')){
    buttonMoreInformation.textContent = 'Скрыть' 
  } else {
    buttonMoreInformation.textContent =  'Показать все'   
  }
})

