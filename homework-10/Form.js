export class Form {
  constructor(id) {
    this.element = document.querySelector(`#${id}`);
    this.element.addEventListener('submit', (event) => {
      this.createData(event);
    });
    this.formValues = null;
  }

  createData(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    this.formValues = Object.fromEntries(formData.entries());
  }

  getData() {
    return this.formValues;
  }

  checkValidityForm() {
    return this.element.checkValidity();
  }

  resetInput() {
    this.element.reset();
  }

  checkValidityField(field) {
    return this.element.elements[`${field}`].checkValidity();
  }

}