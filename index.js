const Modal = {
  open() {
    // Abrir modal
    // Adicionar a class active ao modal
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    // Fechar modal
    // Remover a classs active do modal
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};
