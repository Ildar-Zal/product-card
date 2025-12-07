import { Form } from "./form.js";
export class RegistrationForm extends Form {
  constructor(id) {
    super(id);
  }

  createData(event) {
    super.createData(event);
    if (this.formValues.password != this.formValues.acceptPassword) {
      alert("Вы ввели несоответствующий пароль");
    }
    else {
      const date = new Date();
      this.formValues.createdOn = date;
      alert("Пользователь зарегистрирован!");
    }
  }
}