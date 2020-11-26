var gallery_modal
var modal_image

window.onload = function() {
    gallery_modal = document.getElementsByClassName("gallery-modal")[0];
    modal_image = document.getElementsByClassName("modal-image")[0];
}

function displayModal(element) {
    var image = element.style.backgroundImage.split('"')[1];
    modal_image.src = image;
    gallery_modal.classList.toggle("hide");
}

function closeModal() {
    gallery_modal.classList.toggle("hide");
}