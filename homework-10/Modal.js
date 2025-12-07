export class Modal {
  constructor(id) {
    this.modal = document.querySelector(`#${id}`);
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

