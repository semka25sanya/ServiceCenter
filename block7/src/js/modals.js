
let btns = document.getElementsByClassName("myBtn")
const buttonsClose = document.getElementsByClassName('button-close')
const overlays = document.getElementsByClassName('modal-overlay')
const burger = document.querySelector('.burger')
const nav = document.querySelector('.overlay-for-section-navigation')
const buttonCloseForNav = document.querySelector('.close')

function buttonClick(event) {
  let id = this.getAttribute('data-modal');
   let modal = document.getElementById(id);
   modal.style.display = 'block'
}
for (var i = 0; i < btns.length; i++) {
   btns[i].onclick = buttonClick;
}

function buttonClose(event) {
let elem = event.target.parentElement.parentElement.parentElement
elem.style.display = 'none'
}

for (var i = 0; i < buttonsClose.length; i++) {
  buttonsClose[i].onclick = buttonClose;
}

for (let overlay of overlays){
  overlay.addEventListener('click', function(e){
    e.target.style.display = 'none'
  })
}

burger.addEventListener('click', function(){
nav.style.display = 'block'
})
nav.addEventListener('click', function(){
  if (window.innerWidth < 1400 ){
    nav.style.display = 'none'
  }

})
buttonCloseForNav.addEventListener('click', function(e){
nav.style.display = 'none'
})



// if (window.innerWidth >= 1400 ){
// nav.style.display = 'block'
// }