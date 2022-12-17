const blur = document.querySelector('.blur')
const modalCall = document.querySelector('.modal-call')
const buttonsCall = document.querySelectorAll('.call')

for (let call of buttonsCall) {
  call.addEventListener('click', function(){
    modalCall.classList.add('show-modal');
    blur.classList.add('blur-show')
  })
}

const modalFeedback = document.querySelector('.modal-feedback')
const buttonsChats = document.querySelectorAll('.chat')

for (let chat of buttonsChats) {
  chat.addEventListener('click', function(){
    modalFeedback.classList.add('show-modal')
    blur.classList.add('blur-show')
  })
}

const buttonBurger = document.querySelector('.burger')
const sectionNavigation = document.querySelector('.section-navigation')

buttonBurger.addEventListener('click', function(){
  sectionNavigation.classList.add('show-section-navigation')
  blur.classList.add('blur-show')
})

const closeButtons = document.querySelectorAll('.close')

for (let closeButton of closeButtons){
  closeButton.addEventListener('click', function(){
    sectionNavigation.classList.remove('show-section-navigation')
    modalFeedback.classList.remove('show-modal')
    modalCall.classList.remove('show-modal')
    blur.classList.remove('blur-show')
  })
}

blur.addEventListener('click', function(){
  sectionNavigation.classList.remove('show-section-navigation')
  modalFeedback.classList.remove('show-modal')
  modalCall.classList.remove('show-modal')
  blur.classList.remove('blur-show')
})