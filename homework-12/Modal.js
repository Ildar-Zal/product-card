export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#initOpen(buttonId);
    this.closeButton = null;
    this.closeHandler = null
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.#initClose(this.shouldCloseOnOverlay)
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    if (this.closeButton && this.closeHandler) {
      this.closeButton.removeEventListener('click', this.closeHandler)
      this.overlay.removeEventListener('click', this.closeHandler)
    }
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }

  #initClose(shouldCloseOnOverlay) {
    this.closeHandler = () => {
      this.close();
    };

    this.closeButton = this.modal.querySelector('#modal-close-button')
    this.closeButton.addEventListener('click', this.closeHandler)
    if (shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.closeHandler)
    }
  }
}