(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtns: document.querySelectorAll("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);

  refs.closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", toggleModal);
  });

  refs.modal.addEventListener("click", (event) => {
    if (event.target === refs.modal) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
