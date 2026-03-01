const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

function showModal(thumbnail) {
  modal.style.display = "block";
  modalContent.src = thumbnail.src;
}

function hideModal() {
  modal.style.display = "none";
}