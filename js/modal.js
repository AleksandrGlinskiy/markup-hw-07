(() => {
  
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
console.log(refs

);
  function toggleModal() {
    refs.modal.classList.toggle("hero__backdrop--is-hidden");
  }
})();