const modal = document.getElementById("previewModal");
const modalText = document.getElementById("modalText");
const openPreview = document.getElementById("openPreview");
const closePreview = document.getElementById("closePreview");
const gameButtons = document.querySelectorAll("[data-game]");

function openModal(message) {
  modalText.textContent = message;
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

openPreview.addEventListener("click", () => {
  openModal("Ini area preview. Nanti tombol ini bisa diarahkan ke game utama kamu.");
});

closePreview.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

gameButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const gameName = button.dataset.game;
    openModal(`Kamu memilih ${gameName}. Nanti tombol ini bisa dibuka ke file game terpisah seperti snake.html atau clicker.html.`);
  });
});
