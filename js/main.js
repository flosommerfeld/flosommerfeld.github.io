var modal = document.getElementById("modal");

function openModal(){
  modal.classList.add("is-active");
}

function closeModal(){
  modal.classList.remove("is-active");
}


var btnOpenModal = document.getElementById("btnOpenModal");
var btnCloseModal = document.getElementById("btnCloseModal");
var modalBackground = document.getElementById("modalBackground");

btnOpenModal.addEventListener("click",function(e){//event listener for the "message me" button
  openModal();
},false);

btnCloseModal.addEventListener("click",function(e){//event listener for the close button
  closeModal();
},false);

modalBackground.addEventListener("click",function(e){//event listener for the background of the modal
  closeModal();
},false);
