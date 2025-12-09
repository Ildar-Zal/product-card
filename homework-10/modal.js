export class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
  }

  show() {
    this.modal.showModal();
  }

  close() {
    this.modal.close();
  }

  isOpen() {
    return this.modal.open;
  }
}

