export class Form {
  constructor(id) {
    this.form = null;
    this.formValues = null;
    this.initForm(id);
  }

  initForm(id) {
    this.form = document.getElementById(id);
    this.form.addEventListener('submit', (event) => {
      this.createData(event);
    });
  }

  createData(event) {
    event.preventDefault();
    this.setData(event.target);
  }

  setData(form) {
    const formData = new FormData(form);
    this.formValues = Object.fromEntries(formData.entries());
  }

  getData() {
    return this.formValues;
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