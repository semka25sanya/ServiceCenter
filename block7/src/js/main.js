const buttonMoreInformations = document.querySelectorAll('.button-brend__more')
const brendsList = document.querySelector('.brends-list')
const sectionRepairList = document.querySelector('.section-repair__list')

for (let i =0;i<buttonMoreInformations.length;i++){

  buttonMoreInformations[i].addEventListener('click', function(e){
  
    if (e.target.previousElementSibling.firstElementChild.classList.contains('brends-list')) {
      brendsList.classList.toggle('brends-list--full')
    }
    if (e.target.previousElementSibling.firstElementChild.classList.contains('section-repair__list')){
      sectionRepairList.classList.toggle('section-repair__list--full')
    }

    if (brendsList.classList.contains('brends-list--full') || sectionRepairList.classList.contains('section-repair__list--full')){
      buttonMoreInformations[i].textContent = 'Скрыть' 
    } else {
    buttonMoreInformations[i].textContent =  'Показать все'   
  }
    buttonMoreInformations[i].classList.toggle('button-brend__more-rotate')

  })
}

