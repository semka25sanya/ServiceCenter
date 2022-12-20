const buttonMoreInformations = document.querySelectorAll('.button-brend__more')
const brendsList = document.querySelector('.brends-list')
const sectionRepairList = document.querySelector('.section-repair__list')

for (let elem of buttonMoreInformations){

  elem.addEventListener('click', function(e){
  
    if (e.target.previousElementSibling.firstElementChild.classList.contains('brends-list')) {
      brendsList.classList.toggle('brends-list--full')
    }
    if (e.target.previousElementSibling.firstElementChild.classList.contains('section-repair__list')){
      sectionRepairList.classList.toggle('section-repair__list--full')
    }

    if (brendsList.classList.contains('brends-list--full') || sectionRepairList.classList.contains('section-repair__list--full')){
      elem.textContent = 'Скрыть' 
    } else {
    elem.textContent =  'Показать все'   
  }
   elem.classList.toggle('button-brend__more-rotate')

  })
}

