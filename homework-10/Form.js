export class Form {
  constructor(id) {
    this.form = document.querySelector(`#${id}`);
    this.form.addEventListener('submit', (event) => {
      this.createData(event);
    });
    this.formValues = null;
  }

  createData(event) {
    event.preventDefault();
    this.setData(event.target)
  }

  getData() {
    return this.formValues;
  }

  setData(form) {
    const formData = new FormData(form);
    this.formValues = Object.fromEntries(formData.entries());
  }

  isValidForm() {
    return this.form.checkValidity();
  }

  resetField(field) {
    this.form.elements[field].value = '';
  }

  isValidField(field) {
    return this.form.elements[field].checkValidity();
  }
}