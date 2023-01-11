var btnOpen = document.querySelector('.open_modal')
var btnClose = document.querySelector('.modal_header i')
var iconClose = document.querySelector('.modal_footer button')
var modal = document.querySelector('.modal')

function toggleModal(){
    modal.classList.toggle('hide')
}

function addModal(){
    modal.classList.add('hide')
}

btnOpen.addEventListener('click',toggleModal)
btnClose.addEventListener('click',addModal)
iconClose.addEventListener('click',addModal)
modal.addEventListener('click',function(e){
    if(e.target == e.currentTarget){
        addModal()
    }
})

